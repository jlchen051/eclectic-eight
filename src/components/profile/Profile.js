import React, { useState, useEffect } from 'react';
import './Profile.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'



const Homepage = () => {
    const pronounList = ["She/Her", "He/Him", "They/Them", "Other"]
    const [pronouns, setPronouns] = useState("null");
    const [school, setSchool] = useState("null");
    const [savedSchool, setSavedSchool] = useState("null");
    const [editSchool, setEditSchool] = useState(false);
    const softSkillList = ["Leadership", "Communication", "Time Management", "Interview", "Resume", "Personal Project"]
    const [softSkills, setSoftSkills] = useState([]);
    const [displaySoftSkills, setDisplaySoftSkills] = useState(false);
    const technicalInterestList = ["MatLab", "C++", "React", "Python"]
    const [technicalInterests, setTechnicalInterests] = useState([]);
    const [displayTechnicalInterests, setDisplayTechnicalInterests] = useState(false);
    const industryList = ["Healthcare", "Technology", "Biotech", "Construction", "Consulting", "Pharmaceutical", "Art"]
    const [industry, setIndustry] = useState(null);
    const genderList = ["No Preference", "Female", "Male"]
    const [gender, setGender] = useState(null);
    const [hobbies, setHobbies] = useState([]);

    // useEffect(() => {
    //     // Get existing profile info from API
    // });
    useEffect(() => {
        // Get existing profile info from API
        console.log("editSchool", editSchool);
        console.log("school", school);
    }, [editSchool]);
    useEffect(() => {
        // Get existing profile info from API
        console.log("softSkills", softSkills)
    }, [softSkills]);

    const saveSchool = () => {
        setEditSchool(false);
        setSavedSchool(school);
    }

    const cancelSchool = () => {
        setEditSchool(false);
        setSchool(savedSchool);
    }
    const addSkill = (option, array) => {
        console.log("option", option)
        console.log("array", array, array.find(element => element === option))
        if(array.find(element => element === option)) {

            var index = array.indexOf(option);
            if (index !== -1) {
                var copyArray = [...array]; // make a separate copy of the array
                copyArray.splice(index, 1);
                console.log("softSkills now", copyArray)
                if(array === softSkills) {
                    setSoftSkills(copyArray)
                }
                else if(array === technicalInterests) {
                    setTechnicalInterests(copyArray)
                }
                
            }
        }
        else {
            if(array === softSkills) {
                setSoftSkills([...softSkills, option])
            }
            else if(array === technicalInterests) {
                setTechnicalInterests([...technicalInterests, option])
            }
        }
    }

    const removeSkill = (option, array) => {
        console.log(option, "option")
            var index = array.indexOf(option);
            if (index !== -1) {
                var copyArray = [...array]; // make a separate copy of the array
                copyArray.splice(index, 1);
                console.log("softSkills now", copyArray)
                if(array === softSkills) {
                    setSoftSkills(copyArray)
                }
                else if(array === technicalInterests) {
                    setTechnicalInterests(copyArray)
                }
                
            }
    }
    

    return (
        <div className="profile">
            <h1 className="header">Personal Profile</h1>
            <div className="header">Name: Vicky</div>
            <div className="info">
                <div className="label">Pronouns: </div>
                <select>
                    { pronounList.map((option) => {
                        return <option value={option} onClick={() => setPronouns(option)}>{option}</option>
                    })
                    }
                </select>
            </div>
            <div className="info">
                <div className="label">School: </div>
                { editSchool ? 
                <div>
                    <input type="text" onChange={(e) => setSchool(e.target.value)} value={school}/>
                    <button onClick={() => cancelSchool()}>Cancel</button>
                    <button onClick={() => saveSchool()}>Save</button>
                </div>
                : 
                <div className="editInfo">
                    <div>{savedSchool}</div>
                    <button onClick={ () => setEditSchool(true)}>Edit</button>
                </div> }
            </div>
            <div className="info">
                <div className="label">Interests: </div>
                <button onClick={() => setDisplaySoftSkills(true)}>+</button>
                <div style={{display: displaySoftSkills ? "block" : "none" }}>
                    {
                        softSkillList.map((option) => {
                            return (
                                <div onClick={() => addSkill(option, softSkills)}> 
                                    {option}
                                    {softSkills.find(element => element === option) ? <FontAwesomeIcon icon={faCheck} /> : null }
                                </div>
                            )
                        })
                    }
                </div>
                
            </div>
            <div className="selected-options">
                {
                    softSkills.map((option) => {
                        return (
                            <div className="remove-option"> 
                                {option}
                                <div onClick={() => removeSkill(option, softSkills)}><FontAwesomeIcon icon={faXmark} /></div>
                                
                            </div>
                        )
                    })
                }
            </div>
            <div className="info">
                <div className="label">Technical Interests: </div>
                <button onClick={() => setDisplayTechnicalInterests(true)}>+</button>
                <div style={{display: displayTechnicalInterests ? "block" : "none" }}>
                    {
                        technicalInterestList.map((option) => {
                            return (
                                <div onClick={() => addSkill(option, technicalInterests)}> 
                                    {option}
                                    {technicalInterests.find(element => element === option) ? <FontAwesomeIcon icon={faCheck} /> : null }
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="selected-options">
                    {
                        technicalInterests.map((option) => {
                            return (
                                <div className="remove-option"> 
                                    {option}
                                    <div onClick={() => removeSkill(option, technicalInterests)}><FontAwesomeIcon icon={faXmark} /></div>
                                </div>
                            )
                        })
                    }
                </div>
            <div className="info">
                <div className="label">Desired industry: </div>
                <select>
                    { industryList.map((option) => {
                        return <option value={option} onClick={() => setIndustry(option)}>{option}</option>
                    })
                    }
                </select>
            </div>
            <div className="info">
                <div className="label">Desired gender of mentor: </div>
                <select>
                    { genderList.map((option) => {
                        return <option value={option} onClick={() => setGender(option)}>{option}</option>
                    })
                    }
                </select>
            </div>
        </div>

       
        
    )
};

export default Homepage;