import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import '../styles/Contact.css'
// eslint-disable-next-line 
import { Button, Form, Checkbox, Label, Select} from 'semantic-ui-react'
import { useForm } from "react-hook-form";

const options = [
  {key: "k", text: "Cocina", value: "kitchen"},
  {key: "ba", text: "Baño", value: "bathroom"},
  {key: "be", text: "Cuarto", value: "bedroom"},
  {key: "o", text: "Otro", value: "other"}
]

const binary = [
  {key: "yes", text: "Sí", value: "yes"},
  {key: "no", text: "No", value: "no"}
]

function Contact() {
  // eslint-disable-next-line 
  const { register, handleSubmit, formState: { errors }} = useForm();
  const onSubmit = data => console.log(data);
  return (
    <div className="wrapper-1-contact">
      <div className="item-1-contact">
        <h1>Contáctanos</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut convallis augue sed congue feugiat.
           Mauris rhoncus gravida ipsum sit amet tincidunt. Nulla facilisi. </p>
      </div>
      <div className="item-2-contact">
        <Form className="uiform" onSubmit={handleSubmit(onSubmit)}>
          <Form.Field required>
            <label>Nombre:</label>
            <Form.Input type="text" name="first-name" {...register("firstName", {required: true})} label="Nombre" error/>
            {/* {errors?.firstName?.type === "required" && <Label pointing basic color="red" className="error">Entre su Primer Nombre</Label>} */}
          </Form.Field>
          <Form.Field required>
            <label>Apellidos:</label>
            <input type="text" placeholder="Apellidos" name="last-name" {...register("lastName", {required: true})} />
            {/* {errors?.lastName?.type === "required" && <p className="error">Campo Requerido</p>} */}
          </Form.Field>
          <Form.Field required>
            <label>Teléfono:</label>
            <input type="text" placeholder="Número de Teléfono" name="phone-number" {...register("phoneNumber", {required: true})} />
            {/* {errors?.phoneNumber?.type === "required" && <p className="error">Campo Requerido</p>} */}
            </Form.Field>
          <Form.Field required>
            <label>Correo Electrónico:</label>
            <input type="text" placeholder="E-mail" name="email" {...register("email", {required: true})} />
            {/* {errors?.email?.type === "required" && <p className="error">Campo Requerido</p>} */}
            </Form.Field>
          <Form.Field required>
            <label>Dirección Física:</label>
            <input type="text" placeholder="Dirección Física" name="address" {...register("address1", {required: true})} />
            {/* {errors?.address1?.type === "required" && <p className="error">Campo Requerido</p>} */}
            </Form.Field>
          <Form.Field>
            <label>Mensaje (Opcional):</label>
            <textarea type="text" placeholder="Mensaje" name="message" {...register("message")} />
            </Form.Field>
          <Form.Field required>
            <label>Tipo de Cotización:</label>
            <Form.Select placeholder="Seleccione un tipo" type="text" name="type" {...register("tipo", {required: true})} options={options}/>
            {/* {errors?.tipo?.type === "required" && <p className="error">Campo Requerido</p>} */}
          </Form.Field>
          <Form.Field>
            <label>Ha sido cliente de Fizzel Furniture 360 anteriormente:</label>
            <Select options={binary}/>
          </Form.Field>
          <a href="https://www.termsfeed.com/blog/write-terms-conditions/">Ver Términos &amp; Condiciones</a>
          <Form.Field>
            <Checkbox label='Acepto los Términos &amp; Condiciones'/>
          </Form.Field>
          <Button type="submit">Enviar</Button>
        </Form>
      </div>
    </div>
  );
}
export default Contact;