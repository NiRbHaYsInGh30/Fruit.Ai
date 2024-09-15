// import { useState } from "react";
// import "../Styles/Faq.css";

// const initialFAQs = [
//   {
//     id: 1,
//     question: "How is Tangerine healthy?",
//     answer:
//       "Tangerines are a great health booster due to their high vitamin C content, which supports the immune system and skin health.",
//     image: "/images.jpeg", // Placeholder image link
//     userId: 1, // Simulate the ID of the user who created this FAQ
//   },
//   {
//     id: 2,
//     question: "What are the benefits of apples?",
//     answer:
//       "Apples are rich in fiber and vitamins, promoting heart health and improving digestion.",
//     image: "/images.jpeg", // Placeholder image link
//     userId: 2, // Simulate the ID of another user
//   },
//   {
//     id: 3,
//     question: "What are the benefits of Carrots?",
//     answer:
//       "Carrots are good for skins.",
//     image: "/images.jpeg", // Placeholder image link
//     userId: 3, // Simulate the ID of another user
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
// console.log("This website was created by Nirbhay Singh.");
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
import axios from "axios";
import "../Styles/Faq.css";

const API_URL = "http://127.0.0.1:8000/faqs";

const Faq = () => {
  const [faqs, setFaqs] = useState([]);
  const [newFAQ, setNewFAQ] = useState({
    question: "",
    answer: "",
    image: "",
    id: null,
  });
  const [isEditing, setIsEditing] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(false);

  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => setFaqs(response.data))
      .catch((error) => console.error("Error fetching FAQs:", error));
  }, []);

  const handleAddFAQ = (e) => {
    e.preventDefault();
    if (newFAQ.question && newFAQ.answer) {
      axios
        .post(API_URL, newFAQ)
        .then((response) => {
          setFaqs([...faqs, response.data]);
          setNewFAQ({ question: "", answer: "", image: "", id: null });
          setIsFormVisible(false);
        })
        .catch((error) => console.error("Error adding FAQ:", error));
    } else {
      alert("Please fill in both the question and answer fields.");
    }
  };

  const handleEditFAQ = (id) => {
    console.log("Editing FAQ ID:", id); // Debugging log
    const faqToEdit = faqs.find((faq) => faq._id === id); // Ensure _id is used
    if (faqToEdit) {
      console.log("FAQ found for editing:", faqToEdit); // Debugging log
      setNewFAQ({
        question: faqToEdit.question,
        answer: faqToEdit.answer,
        image: faqToEdit.image,
        id: faqToEdit._id,
      });
      setIsEditing(faqToEdit._id);
      setIsFormVisible(true);
    } else {
      console.error("FAQ not found for editing:", id); // Debugging log
    }
  };

  const handleUpdateFAQ = (e) => {
    e.preventDefault();
    if (newFAQ.question && newFAQ.answer && newFAQ.id) {
      axios
        .put(`${API_URL}/${newFAQ.id}`, newFAQ) // Correct URL formation
        .then((response) => {
          setFaqs(
            faqs.map((faq) =>
              faq._id === newFAQ.id ? { ...response.data } : faq
            )
          );
          setIsEditing(null);
          setNewFAQ({ question: "", answer: "", image: "", id: null });
          setIsFormVisible(false);
        })
        .catch((error) => console.error("Error updating FAQ:", error));
    } else {
      alert("Please fill in both the question and answer fields.");
    }
  };

  const handleDeleteFAQ = (id) => {
    console.log("Deleting FAQ ID:", id); // Debugging log
    axios
      .delete(`${API_URL}/${id}`) // Ensure correct URL formation
      .then(() => {
        setFaqs(faqs.filter((faq) => faq._id !== id)); // Filter by _id
      })
      .catch((error) => console.error("Error deleting FAQ:", error));
  };

  return (
    <div className="faq-container">
      <div className="faq-header">
        <h2>FAQ Section</h2>
        <button
          className="add-faq-button"
          onClick={() => {
            setNewFAQ({ question: "", answer: "", image: "", id: null });
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
            {/* Use _id */}
            <img
              src={
                faq.image ||
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLTbANrQs9rFaSL6c5qMPImjorrPgbrkfywg&s"
              }
              alt="FAQ"
              className="faq-image"
            />
            <div className="faq-content">
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
            <div className="faq-actions">
              <button onClick={() => handleEditFAQ(faq._id)}>Edit</button>{" "}
              {/* Use _id */}
              <button onClick={() => handleDeleteFAQ(faq._id)}>
                Delete
              </button>{" "}
              {/* Use _id */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
