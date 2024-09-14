// import { useState } from "react";
// import "../Styles/Faq.css";

// const initialFAQs = [
//   {
//     id: 1,
//     question: "How is Tangerine healthy?",
//     answer:
//       "Tangerines are a great health booster due to their high vitamin C content, which supports the immune system and skin health.",
//     image: "https://example.com/tangerine.jpg", // Placeholder image link
//     userId: 1, // Simulate the ID of the user who created this FAQ
//   },
//   {
//     id: 2,
//     question: "What are the benefits of apples?",
//     answer:
//       "Apples are rich in fiber and vitamins, promoting heart health and improving digestion.",
//     image: "https://example.com/apple.jpg", // Placeholder image link
//     userId: 2, // Simulate the ID of another user
//   },
// ];

// const Faq = () => {
//   const loggedInUserId = 1; // Simulate a logged-in user with ID 1

//   const [faqs, setFaqs] = useState(initialFAQs);
//   const [newFAQ, setNewFAQ] = useState({ question: "", answer: "", image: "" });
//   const [isEditing, setIsEditing] = useState(null);
//   const [isFormVisible, setIsFormVisible] = useState(false);

//   const handleAddFAQ = (e) => {
//     e.preventDefault();
//     if (newFAQ.question && newFAQ.answer) {
//       setFaqs([...faqs, { ...newFAQ, id: Date.now(), userId: loggedInUserId }]);
//       setNewFAQ({ question: "", answer: "", image: "" });
//       setIsFormVisible(false);
//     } else {
//       alert("Please fill in both the question and answer fields.");
//     }
//   };

//   const handleEditFAQ = (id) => {
//     const faqToEdit = faqs.find((faq) => faq.id === id);
//     setNewFAQ({ ...faqToEdit });
//     setIsEditing(id);
//     setIsFormVisible(true);
//   };

//   const handleUpdateFAQ = (e) => {
//     e.preventDefault();
//     if (newFAQ.question && newFAQ.answer) {
//       setFaqs(
//         faqs.map((faq) =>
//           faq.id === isEditing
//             ? { ...newFAQ, id: isEditing, userId: loggedInUserId }
//             : faq
//         )
//         // Nirbhay singh
//         // Author Nirbhay Singh
//       );
//       setIsEditing(null);
//       setNewFAQ({ question: "", answer: "", image: "" });
//       setIsFormVisible(false);
//     } else {
//       alert("Please fill in both the question and answer fields.");
//     }
//   };

//   const handleDeleteFAQ = (id) => {
//     setFaqs(faqs.filter((faq) => faq.id !== id));
//   };

//   return (
//     <div className="faq-container">
//       <div className="faq-header">
//         <h2>FAQ Section</h2>
//         <button
//           className="add-faq-button"
//           onClick={() => {
//             setNewFAQ({ question: "", answer: "", image: "" });
//             setIsEditing(null);
//             setIsFormVisible(true);
//           }}
//         >
//           Add FAQ
//         </button>
//       </div>

//       {isFormVisible && (
//         <div className="faq-form">
//           <h3>{isEditing ? "Edit FAQ" : "Add New FAQ"}</h3>
//           <form onSubmit={isEditing ? handleUpdateFAQ : handleAddFAQ}>
//             <input
//               type="text"
//               placeholder="Question"
//               value={newFAQ.question}
//               onChange={(e) =>
//                 setNewFAQ({ ...newFAQ, question: e.target.value })
//               }
//             />
//             <textarea
//               placeholder="Answer"
//               value={newFAQ.answer}
//               onChange={(e) => setNewFAQ({ ...newFAQ, answer: e.target.value })}
//             ></textarea>
//             <input
//               type="text"
//               placeholder="Image URL"
//               value={newFAQ.image}
//               onChange={(e) => setNewFAQ({ ...newFAQ, image: e.target.value })}
//             />
//             <button type="submit">
//               {isEditing ? "Update FAQ" : "Add FAQ"}
//             </button>
//           </form>
//         </div>
//       )}

//       <div className="faq-list">
//         {faqs.map((faq) => (
//           <div key={faq.id} className="faq-item">
//             <img
//               src={faq.image || "https://via.placeholder.com/150"}
//               alt="FAQ"
//               className="faq-image"
//             />
//             <div className="faq-content">
//               <h3>{faq.question}</h3>
//               <p>{faq.answer}</p>
//             </div>
//             {faq.userId === loggedInUserId && (
//               <div className="faq-actions">
//                 <button onClick={() => handleEditFAQ(faq.id)}>Edit</button>
//                 <button onClick={() => handleDeleteFAQ(faq.id)}>Delete</button>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Faq;
// // Nirbhay singh
// // Author Nirbhay Singh

import { useState, useEffect } from "react";
import "../Styles/Faq.css";

// Replace with your backend URL
const BACKEND_URL = "http://localhost:8000/faqs";

const Faq = () => {
  const loggedInUserId = 1; // Simulate a logged-in user with ID 1

  const [faqs, setFaqs] = useState([]);
  const [newFAQ, setNewFAQ] = useState({ question: "", answer: "", image: "" });
  const [isEditing, setIsEditing] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(false);

  // Fetch FAQs from the backend
  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const response = await fetch(BACKEND_URL);
        const data = await response.json();
        setFaqs(data);
      } catch (error) {
        console.error("Failed to fetch FAQs:", error);
      }
    };
    fetchFaqs();
  }, []);

  const handleAddFAQ = async (e) => {
    e.preventDefault();
    if (newFAQ.question && newFAQ.answer) {
      try {
        const response = await fetch(BACKEND_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...newFAQ, userId: loggedInUserId }),
        });
        const addedFAQ = await response.json();
        setFaqs([...faqs, addedFAQ]);
        setNewFAQ({ question: "", answer: "", image: "" });
        setIsFormVisible(false);
      } catch (error) {
        console.error("Failed to add FAQ:", error);
      }
    } else {
      alert("Please fill in both the question and answer fields.");
    }
  };

  const handleEditFAQ = (id) => {
    const faqToEdit = faqs.find((faq) => faq._id === id); // Use _id for MongoDB documents
    setNewFAQ({ ...faqToEdit });
    setIsEditing(id);
    setIsFormVisible(true);
  };

  const handleUpdateFAQ = async (e) => {
    e.preventDefault();
    if (newFAQ.question && newFAQ.answer) {
      try {
        const response = await fetch(`${BACKEND_URL}/${isEditing}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...newFAQ, userId: loggedInUserId }),
        });
        const updatedFAQ = await response.json();
        setFaqs(faqs.map((faq) => (faq._id === isEditing ? updatedFAQ : faq)));
        setIsEditing(null);
        setNewFAQ({ question: "", answer: "", image: "" });
        setIsFormVisible(false);
      } catch (error) {
        console.error("Failed to update FAQ:", error);
      }
    } else {
      alert("Please fill in both the question and answer fields.");
    }
  };

  const handleDeleteFAQ = async (id) => {
    try {
      await fetch(`${BACKEND_URL}/${id}`, {
        method: "DELETE",
      });
      setFaqs(faqs.filter((faq) => faq._id !== id));
    } catch (error) {
      console.error("Failed to delete FAQ:", error);
    }
  };

  return (
    <div className="faq-container">
      <div className="faq-header">
        <h2>FAQ Section</h2>
        <button
          className="add-faq-button"
          onClick={() => {
            setNewFAQ({ question: "", answer: "", image: "" });
            setIsEditing(null);
            setIsFormVisible(true);
          }}
        >
          Add FAQ
        </button>
      </div>

      {isFormVisible && (
        <div className="faq-form">
          <h3>{isEditing ? "Edit FAQ" : "Add New FAQ"}</h3>
          <form onSubmit={isEditing ? handleUpdateFAQ : handleAddFAQ}>
            <input
              type="text"
              placeholder="Question"
              value={newFAQ.question}
              onChange={(e) =>
                setNewFAQ({ ...newFAQ, question: e.target.value })
              }
            />
            <textarea
              placeholder="Answer"
              value={newFAQ.answer}
              onChange={(e) => setNewFAQ({ ...newFAQ, answer: e.target.value })}
            ></textarea>
            <input
              type="text"
              placeholder="Image URL"
              value={newFAQ.image}
              onChange={(e) => setNewFAQ({ ...newFAQ, image: e.target.value })}
            />
            <button type="submit">
              {isEditing ? "Update FAQ" : "Add FAQ"}
            </button>
          </form>
        </div>
      )}

      <div className="faq-list">
        {faqs.map((faq) => (
          <div key={faq._id} className="faq-item">
            {" "}
            {/* Use _id for MongoDB documents */}
            <img
              src={faq.image || "https://via.placeholder.com/150"}
              alt="FAQ"
              className="faq-image"
            />
            <div className="faq-content">
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
            {faq.userId === loggedInUserId && (
              <div className="faq-actions">
                <button onClick={() => handleEditFAQ(faq._id)}>Edit</button>{" "}
                {/* Use _id for MongoDB documents */}
                <button onClick={() => handleDeleteFAQ(faq._id)}>
                  Delete
                </button>{" "}
                {/* Use _id for MongoDB documents */}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
