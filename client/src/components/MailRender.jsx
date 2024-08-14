import React from "react";
import { useSelector } from "react-redux";
import MailCard from "./MailCard";
import { setSelectedThread } from "../redux/mails/mailSlice";

import { useDispatch } from "react-redux";

const MailRender = () => {
  const dispatch = useDispatch();

  const { mails } = useSelector((state) => state.mail);
  const sortedMails = [...mails].sort(
    (a, b) => new Date(b.sentAt) - new Date(a.sentAt)
  );

  console.log(sortedMails);

  return (
    <div className="h-full overflow-y-auto scrollbar-hide">
      {sortedMails.map((mail, id) => (
        <div onClick={() => dispatch(setSelectedThread([mail]))}>
          <MailCard
            key={id}
            email={mail.fromEmail}
            subject={mail.subject}
            date={mail.sentAt}
            read={mail.isRead}
          />
        </div>
      ))}
    </div>
  );
};

export default MailRender;
