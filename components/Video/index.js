import React, {useEffect} from "react";
import { StyledRegisterVideo } from "./styles";
import { createClient } from "@supabase/supabase-js"


const PROJECT_URL = "https://dodkahylpbcegtmqrjhr.supabase.co";
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRvZGthaHlscGJjZWd0bXFyamhyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgzNTg4NjEsImV4cCI6MTk4MzkzNDg2MX0.4vBq3_TP4-2K0FY54bf9LiF_bBTiQBjvX9gtpgi2hNk";
const supabase = createClient(PROJECT_URL, PUBLIC_KEY);


function getThumbnail(url) {
    let splitted = url.split("be/")[1]
    return `https://img.youtube.com/vi/${splitted}/hqdefault.jpg`;
}

function useForm(propsDoForm) {
    const [values, setValues] = React.useState(propsDoForm.initialValues);

    return {
        values,
        handleChange: (evento) => {
            console.log(evento.target);
            const value = evento.target.value;
            const name = evento.target.name
            setValues({
                ...values,
                [name]: value,
            });
        },
        clearForm() {
            setValues({});
        }
    };
}

export default function RegisterVideo() {
    const formCadastro = useForm({
        initialValues: { titulo: "Simple Man", url: "https://youtu.be/l-5aPNxv-pU" }
    });
    const [formVisivel, setFormVisivel] = React.useState(false);

    useEffect(() => {
        if(formVisivel == true) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }
    })

    return (
        <StyledRegisterVideo>
            <button className="add-video" onClick={() => setFormVisivel(true)}>
                +
            </button>
            {formVisivel
                ? (
                    <form onSubmit={(evento) => {
                        evento.preventDefault();
                        console.log(formCadastro.values);
                        console.log(getThumbnail(formCadastro.values.url))
                        supabase.from("videodata").insert({
                            title: formCadastro.values.titulo,
                            url: formCadastro.values.url,
                            thumbnail: getThumbnail(formCadastro.values.url),
                            playlist: "jogos",
                         })
                         .then((oqueveio) => {
                            console.log(oqueveio);
                         })
                         .catch((err) => {
                            console.log(err);
                         })

                        setFormVisivel(false);
                        formCadastro.clearForm();
                    }}>
                        <div>
                            <button type="button" className="close-modal" onClick={() => setFormVisivel(false)}>
                                X
                            </button>
                            <input
                                placeholder="Titulo do vídeo"
                                name="titulo"
                                value={formCadastro.values.titulo}
                                onChange={formCadastro.handleChange}
                            />
                            <input
                                placeholder="URL"
                                name="url"
                                value={formCadastro.values.url}
                                onChange={formCadastro.handleChange}
                            />
                            <button type="submit">
                                Cadastrar
                            </button>
                        </div>
                    </form>
                )
                : false}
        </StyledRegisterVideo>
    )
}