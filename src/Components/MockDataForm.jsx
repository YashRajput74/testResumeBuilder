

// import FormData from "../Data/data";

// export default function FormData(){


//     return(
//         <>
//         <form>
//             {
//                 FormData.map((data)=>{
//                  return(
//                     <label key={data.id}>{data.label}</label>
//                  )
//                 })
//             }
//         </form>
//         </>
//     )
// }

import { FormData } from "../Data/data";
import { useState } from "react";

export default function ResumeForm() {
 const [formData, setFormData] = useState({});

 function handleFormData(e){
  setFormData({ ...formData, [key]: e.target.value })
 }

  return (
   <>
    <form>
      {Object.entries(FormData).map(([key, value]) => {
        if (value.fields) {
          return (
            <div key={key}>
              <h3>{value.label}</h3>
              {value.fields.map((field, index) => (
                <div key={index}>
                  <label>{field.label}</label>
                  {field.type === "textarea" ? (
                    <textarea name={field.label} required={field.required}></textarea>
                  ) : (
                    <input type={field.type || "text"} name={field.label} required={field.required} onChange={handleFormData} />
                  )}
                </div>
              ))}
            </div>
          );
        }


        return (
          <div key={key}>
            <label>{value.label}</label>
            {value.type === "textarea" ? (
              <textarea name={key} required={value.required}></textarea>
            ) : (
              <input type={value.type} name={key} required={value.required} onChange={handleFormData}  />
            )}
          </div>
        );
      })}
    </form>

    <button>view in Console</button>
   
   </>
  );
}


