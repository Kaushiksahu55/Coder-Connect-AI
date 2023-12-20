import React, { useState, useRef, useEffect } from "react";
import classes from "./HomePage.module.css"
import sendRequest from "../../Response";
import FooterSection from "../../Components/FooterSection";
import SideBarSection from "../../Components/SideBarSection";
import ResponseMessage from "../../Components/ResponseMessage";

function HomePage() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState([
    {
      text: "Hello How Can i Help",
      isBot: true,
    },
  ]);

  const messageRef = useRef(null);

  useEffect(() => {
    messageRef.current.scrollIntoView();
  }, [result]);

  const handleReload = () => {
    window.location.reload();
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleGetResponse();
    }
  };

  const handlerQueryResponseOne = async (promptText) => {
    //const promptText = "What is Programming ?"

    setResult([...result, { text: promptText, isBot: false }]);

    const queryResponseData = await sendRequest(promptText);
    console.log(queryResponseData);

    setResult((prev) => [...prev, { text: queryResponseData, isBot: true }]);
  };

  const handleChange = (event) => {
    setInput(event.target.value);
    //console.log(input);
  };

  const handleGetResponse = async () => {
    try {
      setResult([...result, { text: input, isBot: false }]);

      setInput("");

      const apiUrl =
        "https://api.openai.com/v1/engines/text-davinci-003/completions"; // Update with the correct API endpoint
      const apiKey = "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"; // Replace with your actual OpenAI API key

      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      };

      const data = {
        prompt: input,
        max_tokens: 256, // Adjust as needed
        temperature: 0.7, // Adjust as needed
      };

      const response = await fetch(apiUrl, {
        method: "POST",
        headers,
        body: JSON.stringify(data),
      });

      const responseData = await response.json();
      console.log(responseData);

      let resData = responseData.choices[0].text;
      console.log(resData);

      setResult((prevResult) => [
        ...prevResult,
        { text: resData, isBot: true },
      ]);

      console.log(responseData.text);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className={classes.App}>
      <SideBarSection
        onClick={handleReload}
        ResponseOne={handlerQueryResponseOne}
      />

      <div className={classes.main}>
        <div className={classes.chats}>
          {result.map((message, index) => (
            <ResponseMessage
              message={message.text}
              index={index}
              isBot={message.isBot}
            />
          ))}

          <div ref={messageRef} />
        </div>

        <FooterSection
          onClick={handleGetResponse}
          value={input}
          onChange={handleChange}
          onKeyDown={handleKeyPress}
        />
      </div>
    </div>
  );
}

export default HomePage;
