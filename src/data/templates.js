const template1 = {
    name: "Modern Blue",
    layout: {
        grid: {
            templateRows: 'auto 1fr',
            templateColumns: '1fr 1fr',
            areas: [
                { name: 'header', colStart: 1, colEnd: 3, rowStart: 1, rowEnd: 2, sections: ["personalInfo"]},
                { name: 'leftColumn', colStart: 1, colEnd: 2, rowStart: 2, rowEnd: 3, sections: ["education", "workExperience"] },
                { name: 'rightColumn', colStart: 2, colEnd: 3, rowStart: 2, rowEnd: 3, sections: ["skills", "projects"] },
            ]
        },
        fontFamily: "Lato",
        fontSize: "40px",
        colorScheme: {
            primary: "#3498DB",
            background: "#FFFFFF",
            text: "#333333"
        }
    }
};


const template2 = {
 name: "Classic Gray",
  layout: {
    grid: {
      templateRows: "auto 1fr",
      templateColumns: "1fr",
      areas: [
        { name: "header", colStart: 1, colEnd: 2, rowStart: 1, rowEnd: 2, sections: ["personalInfo"] },
        { name: "main", colStart: 1, colEnd: 2, rowStart: 2, rowEnd: 3, sections: [ "skills", "workExperience","projects","education"] }
      ]
    },
    fontFamily: "Georgia",
    fontSize: "15px",
    colorScheme: {
      primary: "#555",
      background: "#f9f9f9",
      text: "#111"
    }
  }
}
