import { useState } from "react";
import { BsLightningChargeFill } from "react-icons/bs";
import {
  FaCaretDown,
  FaEye,
  FaImage,
  FaRegSmile,
  FaUserMinus,
} from "react-icons/fa";
import { IoMdCode } from "react-icons/io";
import { IoLinkSharp } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { TbSquareLetterA } from "react-icons/tb";
import { useSelector, useDispatch } from "react-redux";
import { pushIntoSelectedThread } from "../redux/mails/mailSlice";

function CustomMail({ onClose }) {
  const { selectedThread } = useSelector((state) => state.mail);
  const dispatch = useDispatch();

  console.log("selected thread", selectedThread);

  const { themeState } = useSelector((state) => state.theme);

  const [replyData, setReplyData] = useState({
    toEmail: selectedThread[0]?.fromEmail,
    fromEmail: selectedThread[0]?.toEmail,
    subject: "",
    body: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReplyData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleTextAreaChange = (e) => {
    const { name, value } = e.target;
    setReplyData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSendReply = () => {
    dispatch(pushIntoSelectedThread(replyData));
    onClose();
  };

  return (
    <div className="bg-gray-400/25 fixed top-0 left-0 flex justify-center items-center h-full w-full z-20">
      <div className="bg-[#141517] w-full max-w-lg md:max-w-2xl lg:max-w-3xl h-full md:h-4/5 rounded-lg border border-[#41464B] flex flex-col mx-4">
        <div className="flex justify-between items-center px-4 bg-[#23272C] rounded-t-lg py-2 border-b border-[#41464B]">
          <div className="text-sm text-[#E7E7E7]">Reply</div>
          <div onClick={onClose}>
            <RxCross2 className="text-xl cursor-pointer text-[#E7E7E7]" />
          </div>
        </div>

        <div className="flex flex-col flex-grow text-sm py-2 border-b border-[#41464B]">
          <div className="flex items-center py-2 border-b border-[#41464B]">
            <div className="text-[#BAB9BD] pl-4">To :</div>
            <input
              className="bg-transparent ml-4 text-[#E7E7E7] font-semibold text-xs flex-grow outline-none border-none "
              placeholder="Recipient's Email"
              name="to"
              value={replyData.toEmail}
              onChange={handleInputChange}
              readOnly
            />
          </div>
          <div className="flex items-center py-2 border-b border-[#41464B]">
            <div className="text-[#BAB9BD] pl-4">From :</div>
            <input
              className="bg-transparent ml-4 text-[#E7E7E7] font-semibold text-xs flex-grow outline-none border-none"
              placeholder="Your Email"
              name="from"
              value={replyData.fromEmail}
              onChange={handleInputChange}
              readOnly
            />
          </div>
          <div className="flex items-center py-2 border-b border-[#41464B]">
            <div className="text-[#BAB9BD] pl-4">Subject :</div>
            <input
              className="bg-transparent ml-4 text-[#E7E7E7] font-semibold text-xs flex-grow outline-none border-none"
              name="subject"
              value={replyData.subject}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex-grow py-2 px-4 pr-8 h-full">
            <textarea
              className="bg-transparent text-[#BAB9BD] ml-4 w-full h-full resize-none outline-none"
              placeholder={"Hi " + selectedThread[0]?.fromName + ","}
              name="body"
              value={replyData.body}
              onChange={handleTextAreaChange}
            />
          </div>
        </div>

        <div className="flex justify-between items-center py-4 px-4 bg-[#23272C] rounded-b-lg">
          <div
            className="bg-gradient-to-r from-[#4B63DD] to-[#0524BFFC] px-5 py-2 rounded-md flex items-center cursor-pointer"
            onClick={handleSendReply}
          >
            Send <FaCaretDown className="ml-4" />
          </div>
          <div className="flex space-x-4 text-[#ADADAD] text-sm">
            <div className="flex items-center">
              <BsLightningChargeFill className="mr-2" />
              Variables
            </div>
            <div className="flex items-center">
              <FaEye className="mr-2" />
              Preview Email
            </div>
          </div>
          <div className="flex space-x-3 text-lg text-[#ADADAD]">
            <TbSquareLetterA />
            <IoLinkSharp />
            <FaImage />
            <FaRegSmile />
            <FaUserMinus />
            <IoMdCode />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomMail;
