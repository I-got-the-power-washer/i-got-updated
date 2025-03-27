"use client";
import React, { useRef } from 'react';
import styles from './team.module.css';

const TeamProfiles = () => {
  const teamMembers = [
    { id: 1, name: "Emily", role: "Emily is a versatile and detail-oriented professional", img: "/images/4-min.jpg" },
    { id: 2, name: "Morgan", role: "Marketing Momentum Architect", img: "/images/Untitled-5.jpg" },
    { id: 3, name: "Brandon", role: "Precision-Focused Quality Perfectionist", img: "/images/3-min.jpg" },
    { id: 4, name: "Gray", role: "skilled professional", img: "/images/1-min.jpg" },
    { id: 5, name: "John", role: "Community Outreach Dynamo", img: "/images/2-min.jpg" },
    { id: 6, name: "Brady", role: "Emerging Operations Prodigy", img: "/images/1 (2).jpg" },
  ];

  const radioRefs = useRef([]);

  const handleRadioClick = (id, e) => {
    e.preventDefault();
    setTimeout(() => {
      radioRefs.current[id].checked = !radioRefs.current[id].checked;
    }, 0);
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.circleWrapper} style={{ "--total": 6 }}> {/* Changed to 6 */}
        <div className={styles.centerElement}>Our Team</div>

        {teamMembers.map((member, index) => (
          <React.Fragment key={member.id}>
            <input
              type="radio"
              name="radio-avatar"
              id={`radio-avatar-${member.id}`}
              ref={(el) => (radioRefs.current[member.id] = el)}
            />
            <label
              htmlFor={`radio-avatar-${member.id}`}
              className={styles.avatar}
              style={{ "--i": index + 1 }}
              onClick={(e) => handleRadioClick(member.id, e)}
            >
              <div className={styles.nameTag}>
                <span className={styles.role}>{member.role}</span>
                <span className={styles.name}>{member.name}</span>
              </div>
              <img src={member.img} alt={member.name} />
              <svg viewBox="0 0 300 300">
                <text fill="currentColor">
                  <textPath href="#circlePath">
                    {`${member.name} - ${member.role}`}
                  </textPath>
                </text>
              </svg>
            </label>
          </React.Fragment>
        ))}

        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" width="0" height="0">
          <defs>
            <path id="circlePath" d="M 150, 150 m -100, 0 a 100,100 0 0,1 200,0 a 100,100 0 0,1 -200,0" />
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default TeamProfiles;