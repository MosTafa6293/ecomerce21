import React from "react";
import avatar from "../styles/avatar.png";
import "../styles/chat.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllProducts } from "../redux/actions/productAction";
const Chat = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);
  const getAllProductsReducer = useSelector(
    (state) => state.getAllProductsReducer
  );
  const { products } = getAllProductsReducer;
  /*const date = new Date();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  const day = date.getDay();
  const month = date.getMonth();
  const year = date.getFullYear();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const [time, setTime] = useState(`${hours}:${seconds}`);
  const [dateTime, setDateTime] = useState(
    `${days[day]}, ${months[month]} ${year}`
  );*/
  //console.log(dateTime);
  const checkStatus = (e) => {
    //let isActive = true;
    //if (dateTime === "Saturday, May 2022") {
    //isActive = false;
    //}
    //const status = document.querySelector(".status");
    //if (isActive === true) {
    //status.innerHTML = "Active";
    //status.getElementsByClassName.color = "green";
    //} else {
    //status.innerHTML = "No Active";
    //status.style.color = "red";
    //}
  };
  //   const status = document.querySelector(".status");
  //   status.innerHTML = "Not Active";
  //   status.style.color = "red";

  const handleClick = () => {
    const botMessage = document.querySelector("#message1");
    const userMessage = document.querySelector("#message2");
    let badwords = ["fuck|bad|stupid|useless|bitch|crazy|nonsense"];
    let welcome = ["hi|hello|hey|good morning"];
    let buy = ["buy|goodbuy|see you later|cya|good night|good buy"];
    let thanks = ["thanks|thank you|thank you very much"];
    let how = [
      "how|How are you|how are you|How are you doing|how are you doing|how are you doing today|How are you doin today",
    ];
    let owner2 = ["who is treaseure|who is the owner|who is owner"];
    let askName = ["what's your name|what is your name"];
    let ageAsk = [
      "what's your age|what is your age|how old are you|How old are you",
    ];
    let good = ["that is good|that's good|i am fine|good"];
    let self = ["introduce your self"];
    let words = new RegExp(badwords);
    let words2 = new RegExp(welcome);
    let words3 = new RegExp(buy);
    let words4 = new RegExp(thanks);
    let words5 = new RegExp(how);
    let words6 = new RegExp(owner2);
    let words8 = new RegExp(askName);
    let words7 = new RegExp(ageAsk);
    let words9 = new RegExp(good);
    let words10 = new RegExp(self);
    let words11 = document.querySelector("#input").value;
    const mo = products.find((pro) => pro.name == words11);
    console.log(mo);
    const lower = document
      .querySelector("#input")
      .value.toLocaleLowerCase("en-US");
    if (words.test(lower)) {
      //if the input contains bad words
      botMessage.innerHTML = "Typing...";
      setTimeout(() => {
        botMessage.innerHTML = "please do not use bad words..?😣";
        document.querySelector("#input").value = "";
      }, 2000);
    } else if (words2.test(lower)) {
      const status = document.querySelector(".status");
      botMessage.innerHTML = "Typing...";
      setTimeout(() => {
        botMessage.innerHTML = "Hello There how are you doing today?";
        status.innerHTML = "Active";
        status.style.color = "green";
        document.querySelector("#input").value = "";
      }, 2000);
    } else if (words3.test(lower)) {
      const status = document.querySelector(".status");
      botMessage.innerHTML = "Typing...";
      setTimeout(() => {
        botMessage.innerHTML = "Buy, have a nice day";
        document.querySelector("#input").value = "";
      }, 2000);
      setTimeout(() => {
        status.innerHTML = "Not Active";
        status.style.color = "red";
      }, 5000);
    } else if (words4.test(lower)) {
      botMessage.innerHTML = "Typing...";
      setTimeout(() => {
        botMessage.innerHTML = "You are welcome😇";
        document.querySelector("#input").value = "";
      }, 2000);
    } else if (words5.test(lower)) {
      const status = document.querySelector(".status");
      botMessage.innerHTML = "Typing...";
      setTimeout(() => {
        status.innerHTML = "Active";
        status.style.color = "green";
        botMessage.innerHTML = "I am fine, Thank you";
        document.querySelector("#input").value = "";
      }, 2000);
    } else if (words6.test(lower)) {
      botMessage.innerHTML = "Typing...";
      setTimeout(() => {
        botMessage.innerHTML = "Owner is ER Website";
        document.querySelector("#input").value = "";
      }, 2000);
    } else if (words8.test(lower)) {
      botMessage.innerHTML = "Typing...";
      setTimeout(() => {
        botMessage.innerHTML = "My name is Laca";
        document.querySelector("#input").value = "";
      }, 2000);
    } else if (words7.test(lower)) {
      botMessage.innerHTML = "Typing...";
      setTimeout(() => {
        botMessage.innerHTML = "I am 1 year old";
        document.querySelector("#input").value = "";
      }, 2000);
    } else if (words9.test(lower)) {
      botMessage.innerHTML = "Typing...";
      setTimeout(() => {
        botMessage.innerHTML = "😄";
        document.querySelector("#input").value = "";
      }, 2000);
    } else if (words10.test(lower)) {
      botMessage.innerHTML = "Typing...";
      setTimeout(() => {
        botMessage.innerHTML =
          "My name is Laca,I am 1 year old,owner is ER website";
        document.querySelector("#input").value = "";
      }, 2000);
    } else if (mo) {
      botMessage.innerHTML = "Typing...";
      setTimeout(() => {
        botMessage.innerHTML = `
        <a href='/product/${
          mo._id
        }' style='color:#333,textAlign:left,textDecoration:none'>
        <div style='color:#333,textAlign:left'>
        <img src='${mo.image}' style='width:80px'/>
        <p>${mo.description.slice(0, 100)}</p>
        </div>
        </a>`;
        document.querySelector("#input").value = "";
      }, 2000);
    } else {
      botMessage.innerHTML = "Typing...";
      setTimeout(() => {
        botMessage.innerHTML = "I`m sorry I don`t know what is this !";
        document.querySelector("#input").value = "";
      }, 2000);
    }
    userMessage.innerHTML = document.querySelector("#input").value;
  };

  return (
    <div className="chat" onLoad={checkStatus}>
      <div className="wrapper">
        <div className="content">
          <div className="header">
            <div className="img">
              <img src={avatar} alt="" />
            </div>
            <div className="right">
              <div className="name">ChatBot</div>
              <div className="status">Not Active</div>
            </div>
          </div>
          <div className="main">
            <div className="main_content">
              <div className="messages">
                <div className="bot-message" id="message1"></div>
                <div className="human-message" id="message2"></div>
              </div>
            </div>
          </div>
          <div className="bottom">
            <div className="btm">
              <div className="input">
                <input type="text" id="input" placeholder="Enter message" />
              </div>
              <div className="btn">
                <button onClick={handleClick}>
                  <i className="fas fa-paper-plane"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
