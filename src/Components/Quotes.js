// import React from 'react'
// import 'semantic-ui-css/semantic.min.css'
// import '../styles/Quotes.css'
// // eslint-disable-next-line 
// import { Button, Form, Label} from 'semantic-ui-react'

// const options = [
//   {key: "k", text: "Cocina", value: "kitchen"},
//   {key: "ba", text: "Baño", value: "bathroom"},
//   {key: "be", text: "Cuarto", value: "bedroom"},
//   {key: "o", text: "Otro", value: "other"}
// ]

// function Quotes() {
//   // eslint-disable-next-line 
//   const { register, handleSubmit, formState: { errors }} = useForm();
//   const onSubmit = data => console.log(data);
   
//   return (
//     <div className="wrapper-1-quotes">
//       <div className="item-1-quotes">
//         <h1>Cotizaciones</h1>
//         <p>Si deseas una cotizacion, completa la siguiente informacion y nos comunicaremos contigo lo mas pronto posible. "Tambien te puedes
//           comunicar con nosotros al 787-687-8097 O BUSCANOS EN NUESTRAS REDES: FACEBOOK, INSTAGRAM, WHATSAPP." THIS INFO MIGHT CHANGE
//         </p>
//       </div>
//       <div className="item-2-quotes">
//         <Form className="uiform" onSubmit={handleSubmit(onSubmit)}>
//           <Form.Field required>
//             <label>Nombre:</label>
//             <input type="text" placeholder="Nombre" name="first-name" {...register("firstName", {required: true})} />
//             {/* {errors?.firstName?.type === "required" && <Label pointing basic color="red" className="error">Entre su Nombre</Label>} */}
//           </Form.Field>
//           <Form.Field required>
//             <label>Inicial:</label>
//             <input type="text" placeholder="Inicial" name="initial" {...register("initial", {required: true})} />
//             {/* {errors?.initial?.type === "required" && <Label pointing basic color="red" className="error">Entre su Inicial</Label>} */}
//           </Form.Field>
//           <Form.Field required>
//             <label>Apellidos:</label>
//             <input type="text" placeholder="Apellidos" name="last-name" {...register("lastName", {required: true})} />
//             {/* {errors?.lastName?.type === "required" && <Label pointing basic color="red" className="error">Entre sus Apellidos</Label>} */}
//           </Form.Field>
//           <Form.Field required>
//             <label>Teléfono:</label>
//             <input type="text" placeholder="Número de Teléfono" name="phone-number" {...register("phoneNumber", {required: true})} />
//             {/* {errors?.phoneNumber?.type === "required" && <Label pointing basic color="red" className="error">Entre su número de teléfono</Label>} */}
//             </Form.Field>
//           <Form.Field required>
//             <label>Correo Electrónico:</label>
//             <input type="text" placeholder="E-mail" name="email" {...register("email", {required: true})} />
//             {/* {errors?.email?.type === "required" && <Label pointing basic color="red" className="error">Entre su correo eletrónico</Label>} */}
//             </Form.Field>
//           <Form.Field required>
//             <label>Dirección Física:</label>
//             <input type="text" placeholder="Dirección Física" name="address" {...register("address1", {required: true})} />
//             {/* {errors?.address1?.type === "required" && <Label pointing basic color="red" className="error">Entre su dirección</Label>} */}
//             </Form.Field>
//           <Form.Field>
//             <label>Mensaje (Opcional):</label>
//             <textarea type="text" placeholder="Mensaje" name="message" {...register("message")} />
//             </Form.Field>
//           <Form.Field required>
//             <label>Tipo de Cotización:</label>
//             <Form.Select placeholder="Seleccione un tipo" type="text" name="type" {...register("tipo", {required: true})} options={options}/>
//             {/* {errors?.tipo?.type === "required" && <Label pointing basic color="red" className="error">Seleccione un tipo de Cotización</Label>} */}
//           </Form.Field>
//           <Button type="submit">Enviar</Button>
//         </Form>
//       </div>
//     </div>
//   );
// }
// export default Quotes;