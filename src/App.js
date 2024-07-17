import "./App.css";
import React, { useState } from "react";
import { jsPDF } from "jspdf";

function App() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [gender, setGender] = useState("male");
    const [subjects, setSubjects] = useState({
        english: true,
        maths: false,
        physics: false,
    });
    const [resume, setResume] = useState(null);
    const [url, setUrl] = useState("");
    const [selectedOption, setSelectedOption] = useState("");
    const [about, setAbout] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = {
            firstName,
            lastName,
            email,
            contact,
            gender,
            subjects,
            resume: resume ? resume.name : "",
            url,
            selectedOption,
            about
        };

        const doc = new jsPDF();
        
        doc.setFont("helvetica", "bold");
        doc.text("Form Submission", 10, 10);

        // Set font to bold
        doc.setFont("helvetica", "bold");
        doc.text("First Name:  ", 10, 20);
        doc.setFont("helvetica", "normal");
        doc.text(`${formData.firstName}`, 40, 20);

        doc.setFont("helvetica", "bold");
        doc.text("Last Name:  ", 10, 30);
        doc.setFont("helvetica", "normal");
        doc.text(`${formData.lastName}`, 40, 30);

        doc.setFont("helvetica", "bold");
        doc.text("Email: ", 10, 40);
        doc.setFont("helvetica", "normal");
        doc.text(`${formData.email}`, 40, 40);

        doc.setFont("helvetica", "bold");
        doc.text("Contact: ", 10, 50);
        doc.setFont("helvetica", "normal");
        doc.text(`${formData.contact}`, 40, 50);

        doc.setFont("helvetica", "bold");
        doc.text("Gender: ", 10, 60);
        doc.setFont("helvetica", "normal");
        doc.text(`${formData.gender}`, 40, 60);

        doc.setFont("helvetica", "bold");
        doc.text("Subjects: ", 10, 70);
        doc.setFont("helvetica", "normal");
        doc.text(`  English: ${formData.subjects.english}`, 20, 80);
        doc.text(`  Maths: ${formData.subjects.maths}`, 20, 90);
        doc.text(`  Physics: ${formData.subjects.physics}`, 20, 100);

        doc.setFont("helvetica", "bold");
        doc.text("Resume: ", 10, 110);
        doc.setFont("helvetica", "normal");
        doc.text(`${formData.resume}`, 40, 110);

        doc.setFont("helvetica", "bold");
        doc.text("URL: ", 10, 120);
        doc.setFont("helvetica", "normal");
        doc.text(`${formData.url}`, 40, 120);

        doc.setFont("helvetica", "bold");
        doc.text("Option:   ", 10, 130);
        doc.setFont("helvetica", "normal");
        doc.text(`${formData.selectedOption}`, 40, 130);

        doc.setFont("helvetica", "bold");
        doc.text("About: ", 10, 140);
        doc.setFont("helvetica", "normal");
        doc.text(`${formData.about}`, 40, 140);

        doc.save("form_submission.pdf");
    };

    const handleSubjectChange = (sub) => {
        setSubjects((prev) => ({
            ...prev,
            [sub]: !prev[sub],
        }));
    };

    const handleReset = () => {
        setFirstName("");
        setLastName("");
        setEmail("");
        setContact("");
        setGender("male");
        setSubjects({
            english: true,
            maths: false,
            physics: false,
        });
        setResume(null);
        setUrl("");
        setSelectedOption("");
        setAbout("");
    };

    return (
        <div className="App">
            <h1>Form in React</h1>
            <fieldset>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="firstname">
                        First Name*
                    </label>
                    <input
                        type="text"
                        name="firstname"
                        id="firstname"
                        value={firstName}
                        onChange={(e) =>
                            setFirstName(e.target.value)
                        }
                        placeholder="Enter First Name"
                        required
                    />
                    <label htmlFor="lastname">Last Name*</label>
                    <input
                        type="text"
                        name="lastname"
                        id="lastname"
                        value={lastName}
                        onChange={(e) =>
                            setLastName(e.target.value)
                        }
                        placeholder="Enter Last Name"
                        required
                    />
                    <label htmlFor="email">Enter Email* </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={email}
                        onChange={(e) =>
                            setEmail(e.target.value)
                        }
                        placeholder="Enter email"
                        required
                    />
                    <label htmlFor="tel">Contact*</label>
                    <input
                        type="tel"
                        name="contact"
                        id="contact"
                        value={contact}
                        onChange={(e) =>
                            setContact(e.target.value)
                        }
                        placeholder="Enter Mobile number"
                        required
                    />
                    <label htmlFor="gender">Gender*</label>
                    <input
                        type="radio"
                        name="gender"
                        value="male"
                        id="male"
                        checked={gender === "male"}
                        onChange={(e) =>
                            setGender(e.target.value)
                        }
                    />
                    Male
                    <input
                        type="radio"
                        name="gender"
                        value="female"
                        id="female"
                        checked={gender === "female"}
                        onChange={(e) =>
                            setGender(e.target.value)
                        }
                    />
                    Female
                    <input
                        type="radio"
                        name="gender"
                        value="other"
                        id="other"
                        checked={gender === "other"}
                        onChange={(e) =>
                            setGender(e.target.value)
                        }
                    />
                    Other
                    <label htmlFor="lang">
                        Your best Subject
                    </label>
                    <input
                        type="checkbox"
                        name="lang"
                        id="english"
                        checked={subjects.english === true}
                        onChange={(e) =>
                            handleSubjectChange("english")
                        }
                    />
                    English
                    <input
                        type="checkbox"
                        name="lang"
                        id="maths"
                        checked={subjects.maths === true}
                        onChange={(e) =>
                            handleSubjectChange("maths")
                        }
                    />
                    Maths
                    <input
                        type="checkbox"
                        name="lang"
                        id="physics"
                        checked={subjects.physics === true}
                        onChange={(e) =>
                            handleSubjectChange("physics")
                        }
                    />
                    Physics
                    <label htmlFor="file">Upload Resume*</label>
                    <input
                        type="file"
                        name="file"
                        id="file"
                        onChange={(e) =>
                            setResume(e.target.files[0])
                        }
                        placeholder="Upload File"
                        required
                    />
                    <label htmlFor="url">Enter URL*</label>
                    <input
                        type="url"
                        name="url"
                        id="url"
                        value={url}
                        onChange={(e) =>
                            setUrl(e.target.value)
                        }
                        placeholder="Enter URL"
                        required
                    />
                    <label>Select your choice</label>
                    <select
                        name="select"
                        id="select"
                        value={selectedOption}
                        onChange={(e) =>
                            setSelectedOption(
                                e.target.value
                            )
                        }
                    >
                        <option
                            value=""
                            disabled
                            selected={selectedOption === ""}
                        >
                            Select your choice
                        </option>
                        <optgroup label="Beginners">
                            <option value="1">HTML</option>
                            <option value="2">CSS</option>
                            <option value="3">JavaScript</option>
                        </optgroup>
                        <optgroup label="Advanced">
                            <option value="4">React</option>
                            <option value="5">Node</option>
                            <option value="6">Express</option>
                            <option value="7">MongoDB</option>
                        </optgroup>
                    </select>
                    <label htmlFor="about">About</label>
                    <textarea
                        name="about"
                        id="about"
                        cols="30"
                        rows="10"
                        value={about}
                        onChange={(e) =>
                            setAbout(e.target.value)
                        }
                        placeholder="About yourself"
                        required
                    ></textarea>
                    <button
                        type="reset"
                        value="reset"
                        onClick={handleReset}
                    >
                        Reset
                    </button>
                    <button
                        type="submit"
                        value="Submit"
                    >
                        Submit
                    </button>
                </form>
            </fieldset>
        </div>
    );
}

export default App;
