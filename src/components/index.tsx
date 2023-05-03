import React, {useState} from 'react';
// import "./To-Do-List.scss"
// const ToDoList = () => {
//     const[contacts, setContacts] = useState<string>([])
//     const [values, setValues] = useState<IContact>({
//         name:"",
//         surname:'',
//         email:'',
//         phone:1,
//     } )
//
//     interface IContact{
//         name:string
//         surname:string
//         email:string
//         phone:number
//     }
//
//     const handelChange = (e:any) =>{
//         setValues({...values, [e.target.name]: e.target.value})
//     }
//
//     const handleClick = () => {
//         // @ts-ignore
//         setContacts([...contacts, values])
//     }
//
//
//     return (
//         <>
//             <div id="to-do-list">
//                 <h1>TO DO LIST</h1>
//                 <div className="container">
//                     <div className="to-do-list">
//
//                         <div className="to-do-list--prev">
//                             <input onChange={handelChange} type="text" placeholder="Имя*" name="name"/>
//                             <input onChange={handelChange} type="text" placeholder="Фамилия*" name="surname"/>
//                             <input onChange={handelChange} type="email" placeholder="Email*" name="email"/>
//                             <input onChange={handelChange} type="tel" placeholder="Телефон*" name="phone"/>
//                             <button onClick={handleClick} style={{
//                                 background:"black",
//
//                             }}>Отправить</button>
//                         </div>
//
//                         <div className="to-do-list--next">
//                             <div className="to-do-list--next--result">
//                                 {
//                                     contacts.map(el => {
//                                         <div>
//                                             {el.target.name}
//                                         </div>
//                                     })
//                                 }
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };
//
// export default ToDoList;