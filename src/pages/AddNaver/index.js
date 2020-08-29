import React, { useState } from "react";
import { Alert, Text } from "react-native";
import {
  Container,
  IconGoBack,
  TouchImage,
  TextAddNaver,
  Form,
  FormInput,
  SubmitButton,
} from "./styles";
import Header from "../../components/Header";
import GoBack from "../../../assets/GoBack.png";
import Modal from "../../components/Modal";
//api
import api from "../../services/api";

export default function AddNaver({ navigation }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [job, setJob] = useState("");
  const [project, setProject] = useState("");
  const [urlPhoto, setUrlPhoto] = useState("");
  const [adimissionDate, setAdimissionDate] = useState("");
  const [loading, setLoading] = useState(false);

  // function to add a naver
  async function addNaver() {
    setLoading(true);
    if (!name || !age || !job || !adimissionDate || !project || !urlPhoto) {
      Alert.alert("Erro", "Preencha todos os campos para adicionar um Naver!");
      setLoading(false);
    } else {
      try {
        const response = await api.post("navers", {
          name,
          job_role: job,
          birthdate: age,
          admission_date: adimissionDate,
          project,
          url: urlPhoto,
        });
        if (response.status === 200) {
          setIsModalVisible(true);
          setName("");
          setAge("");
          setJob("");
          setAdimissionDate("");
          setProject("");
          setUrlPhoto("");
          setLoading(false);
        }
      } catch (err) {
        console.log(err.response);
        Alert.alert("Erro", "Desculpe, ocorreu um erro!");
        setLoading(false);
      }
    }
  }

  return (
    <Container>
      {isModalVisible ? (
        <Modal onClose={() => setIsModalVisible(false)}>
          Naver criado com sucesso
        </Modal>
      ) : null}
      <Header>
        <TouchImage onPress={() => navigation.goBack()}>
          <IconGoBack source={GoBack} />
        </TouchImage>
      </Header>
      <TextAddNaver>Adicionar naver</TextAddNaver>
      <Form>
        <FormInput
          value={name}
          onChangeText={setName}
          label="Nome"
          placeholder="Nome"
        />
        <FormInput
          value={job}
          onChangeText={setJob}
          label="Cargo"
          placeholder="Cargo"
        />
        <FormInput
          value={age}
          onChangeText={setAge}
          label="Data de nascimento"
          placeholder="Data de nascimento"
        />
        <FormInput
          value={adimissionDate}
          onChangeText={setAdimissionDate}
          label="Dia de admissão"
          placeholder="Dia de admissão"
        />
        <FormInput
          value={project}
          onChangeText={setProject}
          label="Projetos que participou"
          placeholder="Projetos que participou"
        />
        <FormInput
          value={urlPhoto}
          onChangeText={setUrlPhoto}
          label="URL da foto do naver"
          placeholder="URL da foto do naver"
        />
        <SubmitButton loading={loading} onPress={addNaver}>
          Salvar
        </SubmitButton>
      </Form>
    </Container>
  );
}
