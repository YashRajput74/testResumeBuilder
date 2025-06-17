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
export const templates=[template1,template2];

// export const template3 = {
//     name: "Modern Blue",
//     fontFamily: "Lato",
//     fontSize: "14px",
//     colorScheme: {
//       primary: "#3498db",
//       background: "#ffffff",
//       text: "#2c3e50"
//     },
//     layout: {
//       templateRows: "auto 1fr",
//       templateColumns: "1fr 1fr",
//       areas: [
//         {
//           name: "header",
//           rowStart: 1,
//           colStart: 1,
//           rowEnd: 2,
//           colEnd: 3,
//           sections: ["personalInfo"]
//         },
//         {
//           name: "leftColumn",
//           rowStart: 2,
//           colStart: 1,
//           rowEnd: 3,
//           colEnd: 2,
//           sections: ["education", "workExperience"]
//         },
//         {
//           name: "rightColumn",
//           rowStart: 2,
//           colStart: 2,
//           rowEnd: 3,
//           colEnd: 3,
//           sections: ["skills", "projects"]
//         }
//       ]
//     }
// };





// template1.js
// const template1 = {
//     name: "Modern Blue",
//     layout: {
//         grid: {
//             templateRows: 'auto 1fr',
//             templateColumns: '1fr 1fr',
//             areas: [
//                 {
//                     name: 'header',
//                     colStart: 1,
//                     colEnd: 3,
//                     rowStart: 1,
//                     rowEnd: 2,
//                     sections: ["personalInfo"]
//                 },
//                 {
//                     name: 'leftColumn',
//                     colStart: 1,
//                     colEnd: 2,
//                     rowStart: 2,
//                     rowEnd: 3,
//                     sections: ["education", "workExperience"]
//                 },
//                 {
//                     name: 'rightColumn',
//                     colStart: 2,
//                     colEnd: 3,
//                     rowStart: 2,
//                     rowEnd: 3,
//                     sections: ["skills", "projects"]
//                 },
//             ]
//         },
//         fontFamily: "Lato",
//         fontSize: "16px",
//         colorScheme: {
//             primary: "#3498DB",
//             background: "#FFFFFF",
//             text: "#333333"
//         }
//     }
// };

//  export const templates=[template1];
