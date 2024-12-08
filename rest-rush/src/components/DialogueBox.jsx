import React, { useEffect, useState } from 'react';

const DialogueBox = ({ dialogue,  }) => {
//   const [isVisible, setIsVisible] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsVisible(false);
//     }, 5000); // Hide after 5 seconds

//     return () => clearTimeout(timer); // Clear timeout on component unmount
//   }, [dialogue]);

//   if (!showDialogue || !isVisible) return null;

  return (
    <div className="dialogue-box">
      {dialogue}
    </div>
  );

}
export default DialogueBox;
