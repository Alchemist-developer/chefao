import React from "react";
import { useDispatch } from "react-redux";
import "./style.css";
import Icon from "/src/assets/icon.png";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { createPost } from "../../services/posts";
import { addNewPost } from "../../store/post";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const PostCreator: React.FC = () => {
  const id = useSelector((state: RootState) => state.usersSlice.id) as number;
  const nome = useSelector((state: RootState) => state.usersSlice.nome) as string;
  const email = useSelector((state: RootState) => state.usersSlice.email) as string;
  const apartamento = useSelector((state: RootState) => state.usersSlice.apartamento) as number;
  const imagem = useSelector((state: RootState) => state.usersSlice.imagem) as string;
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      id: '',
      user_nome: '',
      user_email: '',
      user_apartamento: '',
      comentario: '',
      user_imagem: '',
      user_id: ''
    },
    onSubmit: async values => {
      const data = await createPost({...values, user_id: id, user_apartamento: apartamento, user_email: email, user_imagem: imagem, user_nome: nome });
      dispatch(addNewPost({post: data}));
    }
  })

  return (
    <div className="containerPostCreator">
      <div className="postCreator">
        <img src={Icon} alt="" />
        <form onSubmit={formik.handleSubmit}>
          <textarea id="comentario" placeholder="Deixe aqui seu comentário" value={formik.values.comentario} onChange={formik.handleChange}></textarea>
          <button className="button" type="submit">publicar</button>
        </form>
      </div>
    </div>
  );
};

export default PostCreator;