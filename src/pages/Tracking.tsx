import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import { User } from '../Interfaces/User';
import Chatbox from '../components/Chatbox';

const Tracking = () => {
  const navigate = useNavigate();
  
  const [commpletedPage, setCompletedPage] = useState(0);
  let qariList = useLocation().state?.qariList || [];
  
  useEffect(() => {
    console.log("Tracking: ", qariList);
    if (qariList.length === 0) {
      console.log("No qari list found, fallback to Tadarus page...");
      navigate("/tadarus");
    }
  }, [navigate, qariList])

  const updatedQariList = qariList.map((user: User) => {
    const totalPages = (user.end - user.start + 1) * 20;
    const perDay = Number.isInteger(totalPages / 30) ? 
                          totalPages / 30 : (totalPages / 30).toFixed(1);
    return { ...user, totalPages, perDay };
  });
  qariList = updatedQariList;

  // TODO: Add screenshot sharing capability
  // TODO: Add API integration for message persistence
  // TODO: Add loading states for API calls
  // TODO: Add error handling for failed API calls

  const QariSection = () => {
    return qariList.map((user: User, index: number) => (
      <div key={index} className="user-card" style={{ width: '250px' }}>
        <div className="flex items-center justify-between gap-x-20">
          <p className="user-name">{user.name}</p>
          <p className="flex items-center">Page: 
            <span className='font-semibold text-right pl-2'> {user.start}-{user.end}</span>
          </p> 
        </div>
        <div className="progress-bar mt-1">
          <div className="progress" style={{ width: 
            `${(user.currentPages ? user.currentPages : 0) / (user.totalPages ? user.totalPages : 1) * 100}%` }}>
          </div>
        </div>
        <div className="flex justify-between">
          <p className="text-sm pt-1">Min Pages per Day:</p>
          <p className="text-sm font-semibold">{user.perDay}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-sm">Today completed page(s):</p>
          <p className="text-sm font-semibold">{commpletedPage}/
            <span className="font-normal">{user.totalPages}</span></p>
        </div>
      </div>
    ));
  }

  return (
    <div className="flex flex-row gap-2 p-4 text-black">

      {/* Qari Summary Section */}
      <div className="flex-1 tracking-container">
        {qariList.length <= 5 ? 
          <QariSection /> 
        : (
          <div className="overflow-y-auto h-[55vh] space-y-3 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 pr-3">
            <QariSection />
          </div>
        )}
      </div>
      
      {/* Chatbox Section */}
      <div className="flex-1">
        <Chatbox currentUser={qariList[0]} />
      </div>
    </div>
  );
}

export default Tracking;