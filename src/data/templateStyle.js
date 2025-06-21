// const sharedStyles = {
//     "2": {
//         heading: {
//             color: "var(--heading-color)",
//             textDecoration: "none",
//             textAlign: "center",
//             borderTop: "2px solid var(--heading-color)",
//             borderBottom: "2px solid var(--heading-color)"
//         },
//     },
//     "3": {

//     }
// };

// const templateStyles = {
//     "2": {
//         vars: {
//             "--heading-color": "#003366",
//             "--accent-color": "#3498db",
//             "--secondary-heading-color": "gray",
//             "--content-color": "#111",
//             "--section-padding": "1rem"
//         },
//         personalInfo: {
//             box: {
//                 border: "1px solid white",
//             },
//             name: {
//                 color: "var(--heading-color)",
//             },
//             position: {
//                 color: "var(--secondary-heading-color)",
//                 fontWeight: "400",
//             },
//             summary: {
//                 color: "var(--content-color)",
//                 paddingTop: "10px"
//             }
//         },
//         contact: {
//             heading: {
//                 display: "none"
//             },
//             innerBox: {
//                 display: "flex",
//                 justifyContent: "flex-start",
//                 flexDirection: "row-reverse"
//             },
//             icon: {
//                 color: "var(--heading-color)",
//                 marginLeft: "10px"
//             }
//         },
//         skills: {
//             heading: {
//                 ...sharedStyles["2"].heading,
//             },
//             eachSkillBox: {
//                 borderRadius: "1vh",
//                 fontWeight: "400",
//                 backgroundColor: "var(--heading-color)",
//                 border: "none",
//                 color: "white"
//             }
//         },
//         workExpe: {
//             box: {
//                 border: "none"
//             },
//             heading: {
//                 ...sharedStyles["2"].heading,
//             },
//             role: {
//                 color: "var(--content-color)"
//             },
//             organization: {
//                 color: "var(--content-color)"
//             },
//             dates: {
//                 color: "gray"
//             },
//             wholeList: {
//                 listStyle: "square"
//             },
//         },
//         education: {
//             box: {
//                 border: "none"
//             },
//             heading: {
//                 ...sharedStyles["2"].heading,
//             },
//             eachSchool: {
//                 color: "var(--content-color)"
//             },
//             city: {
//                 color: "gray"
//             },
//         },
//         organiz: {
//             box: {
//             },
//             heading: {
//                 ...sharedStyles["2"].heading,
//                 marginBottom: "10px"
//             },
//             innerBox: {
//                 display: "flex",
//                 flexWrap: "wrap"
//             },
//             eachOrganiz: {
//                 padding: "0px 20px",
//                 marginBottom: "20px"
//             },
//             title: {
//                 color: "var(--content-color)"
//             },
//             date: {
//                 textAlign: "left"
//             }
//         }
//     },
//     "3": {
//         vars: {
//             "--heading-color": "#333",
//             "--accent-color": "#3498db",
//             "--secondary-heading-color": "#2091FF",
//             "--content-color": "#111",
//             "--section-padding": "1rem"
//         },
//         personalInfo: {
//             box: {
//                 border: "1px solid white",
//             },
//             name: {
//                 color: "var(--heading-color)",
//             },
//             position: {
//                 color: "var(--secondary-heading-color)",
//                 fontWeight: "400",
//             },
//             summary: {
//                 display: "none",
//             }
//         },
//         contact: {
//             box: {
//                 display: "flex",
//                 flexWrap: "wrap" 
//             },
//             heading: {
//                 display: "none"
//             },
//             innerBox: {
//                 display: "block"
//             },
//             icon: {

//             },
//             content: {

//             },
//             anchor: {

//             }
//         },
//     }
// }

// export default templateStyles;



const sharedStyles = {
    "2": {
        heading: {
            color: "var(--heading-color)",
            textDecoration: "none",
            textAlign: "center",
            borderTop: "2px solid var(--heading-color)",
            borderBottom: "2px solid var(--heading-color)"
        },
    },
    "3": {
        heading: {
            color: "var(--content-color)",
            borderBottom: "2px solid var(--content-color)",
            marginBottom: "10px"
        },
        content: {
            color: "var(--content-color)",
            marginBottom: "2rem"
        }
    }
};

const templateStyles = {
    "1": {
        contact: {
            visibleFields: ["phoneNo", "address", "email", "portfolio", "linkedin", "github"],
        }
    },
    "2": {
        vars: {
            "--heading-color": "#003366",
            "--accent-color": "#3498db",
            "--secondary-heading-color": "gray",
            "--content-color": "#111",
            "--section-padding": "1rem"
        },
        personalInfo: {
            box: {
                border: "1px solid white",
            },
            name: {
                color: "var(--heading-color)",
            },
            position: {
                color: "var(--secondary-heading-color)",
                fontWeight: "400",
            },
            summary: {
                color: "var(--content-color)",
                paddingTop: "10px"
            }
        },
        contact: {
            visibleFields: ["email", "phoneNo", "address", "linkedin", "github"],
            heading: {
                display: "none"
            },
            innerBox: {
                display: "flex",
                justifyContent: "flex-start",
                flexDirection: "row-reverse"
            },
            icon: {
                color: "var(--heading-color)",
                marginLeft: "10px"
            }
        },
        skills: {
            heading: {
                ...sharedStyles["2"].heading,
            },
            eachSkillBox: {
                borderRadius: "1vh",
                fontWeight: "400",
                backgroundColor: "var(--heading-color)",
                border: "none",
                color: "white"
            }
        },
        workExpe: {
            box: {
                border: "none"
            },
            heading: {
                ...sharedStyles["2"].heading,
            },
            role: {
                color: "var(--content-color)"
            },
            organization: {
                color: "var(--content-color)"
            },
            dates: {
                color: "gray"
            },
            wholeList: {
                listStyle: "square"
            },
        },
        education: {
            box: {
                border: "none"
            },
            heading: {
                ...sharedStyles["2"].heading,
            },
            eachSchool: {
                color: "var(--content-color)"
            },
            city: {
                color: "gray"
            },
        },
        organiz: {
            box: {
            },
            heading: {
                ...sharedStyles["2"].heading,
                marginBottom: "10px"
            },
            innerBox: {
                display: "flex",
                flexWrap: "wrap"
            },
            eachOrganiz: {
                padding: "0px 20px",
                marginBottom: "20px"
            },
            title: {
                color: "var(--content-color)"
            },
            date: {
                textAlign: "left"
            }
        }
    },
    "3": {
        vars: {
            "--heading-color": "#333",
            "--secondary-heading-color": "#2091FF",
            "--content-color": "gray",
        },
        personalInfo: {
            box: {
                border: "1px solid white",
            },
            name: {
                color: "var(--heading-color)",
            },
            position: {
                color: "var(--secondary-heading-color)",
                fontWeight: "400",
            },
            summary: {
                display: "none",
            }
        },
        contact: {
            visibleFields: ["phoneNo", "portfolio", "linkedin", "address"],
            box: {
                display: "flex",
                flexWrap: "wrap"
            },
            heading: {
                display: "none"
            },
            innerBox: {
                marginRight: "25px"
            },
            icon: {
                color: "var(--content-color)"
            },
            content: {
                marginLeft: "5px",
                color: "var(--content-color)"
            },
            anchor: {
                marginLeft: "5px",
                color: "var(--content-color)"
            }
        },
        summary: {
            box: {
                marginBottom: "25px"
            },
            heading: {
                ...sharedStyles["3"].heading
            },
            content: {
                ...sharedStyles["3"].content
            }
        },
        workExpe: {
            box: {
                border: "none",
                paddingLeft: "0px"
            },
            heading: {
                ...sharedStyles["3"].heading,
                textDecoration: "none"
            },
            role: {
                fontSize: "18px"
            },
            organization: {
                color: "var(--secondary-heading-color)",
                padding: "5px 0px",
                fontSize: "16px"
            },
            dates: {
                color: "var(--content-color)",
            },
            wholeList: {
                color: "var(--content-color)"
            }
        },
        education: {
            box: {
                border: "none",
                paddingLeft: "0px"
            },
            heading: {
                ...sharedStyles["3"].heading,
                textDecoration: "none",
            },
            name: {
                fontSize: "18px"
            },
            city: {
                fontSize: "16px",
                color: "var(--secondary-heading-color)",
                paddingBottom: "5px"
            },
            description: {
                fontSize: "14px"
            }
        },
        skills: {
            heading: {
                ...sharedStyles["3"].heading,
                textDecoration: "none",
                marginBottom: "15px"
            },
            eachSkillBox: {
                borderTop: "none",
                borderLeft: "none",
                borderRight: "none",
                borderBottom: "1px solid black",
                padding: "4px"
            }
        },
        achieve: {
            box: {
                marginTop: "25px",
                textAlign: "left",
            },
            heading: {
                ...sharedStyles["3"].heading
            },
            content: {
                padding: "2px",
                color: "var(--content-color)"
            }
        },
        strength: {
            box: {
                marginTop: "25px",
                textAlign: "left",
                marginBottom: "25px"
            },
            heading: {
                ...sharedStyles["3"].heading
            },
            content: {
                padding: "2px",
                color: "var(--content-color)"
            }
        },
    },
    "4": {
        
    }
}

export default templateStyles;