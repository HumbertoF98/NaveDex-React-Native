import React, { useState, useRef } from "react";
import { Alert } from "react-native";
import {
  Container,
  IconGoBack,
  TouchImage,
  TextAddNaver,
  Form,
  FormInput,
  SubmitButton,
} from "./styles";
import { useRoute } from "@react-navigation/native";
import Header from "../../components/Header";
import GoBack from "../../../assets/GoBack.png";
import Modal from "../../components/Modal";
//api
import api from "../../services/api";

export default function AddNaver({ navigation }) {
  const route = useRoute();
  const [isModalVisible, setIsModalVisible] = useState(false);

  /*
   * if we have route params, we can use the same view to update the user
   */
  const AddEditNaver = route.params ? "Editar Naver" : "Adicionar Naver";
  const [name, setName] = useState(route.params ? route.params.naver.name : "");
  const [age, setAge] = useState(
    route.params
      ? route.params.naver.birthdate.slice(0, 10).split("-").reverse().join("/")
      : ""
  );
  const [job, setJob] = useState(
    route.params ? route.params.naver.job_role : ""
  );
  const [project, setProject] = useState(
    route.params ? route.params.naver.project : ""
  );
  const [urlPhoto, setUrlPhoto] = useState(
    route.params ? route.params.naver.url : ""
  );
  const [adimissionDate, setAdimissionDate] = useState(
    route.params
      ? route.params.naver.admission_date
          .slice(0, 10)
          .split("-")
          .reverse()
          .join("/")
      : ""
  );
  const [id, setId] = useState(route.params ? route.params.naver.id : "");
  const [loading, setLoading] = useState(false);

  // refferences
  const ageRef = useRef();
  const jobRef = useRef();
  const projectRef = useRef();
  const urlPhotoRef = useRef();
  const admissionDateRef = useRef();

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

  // mask for date
  const maskDate = (value) => {
    const v = value.replace(/\D/g, "").slice(0, 10);
    if (v.length >= 5) {
      return `${v.slice(0, 2)}/${v.slice(2, 4)}/${v.slice(4)}`;
    } else if (v.length >= 3) {
      return `${v.slice(0, 2)}/${v.slice(2)}`;
    }
    return v;
  };

  //function to mask date of birth
  function handleDateAge(age) {
    setAge(maskDate(age));
  }

  //function to mask date of admission
  function handleDataAdmission(date) {
    setAdimissionDate(maskDate(date));
  }

  // function to update a naver
  async function updateNaver() {
    console.log(id);
    setLoading(true);
    try {
      await api
        .put(`navers/${id}`, {
          name,
          job_role: job,
          birthdate: age,
          admission_date: adimissionDate,
          project,
          url: urlPhoto,
        })
        .then(function (response) {
          if (response.status === 200) {
            setIsModalVisible(true);
            setLoading(false);
          }
        });
    } catch (err) {
      Alert.alert("Erro", "Desculpe, ocorreu um erro!");
      setLoading(false);
    }
  }

  return (
    <Container>
      {isModalVisible ? (
        <Modal onClose={() => setIsModalVisible(false)}>
          {route.params
            ? "Naver editado com sucesso"
            : "Naver adicionado com sucesso"}
        </Modal>
      ) : null}
      <Header>
        <TouchImage onPress={() => navigation.goBack()}>
          <IconGoBack source={GoBack} />
        </TouchImage>
      </Header>
      <TextAddNaver>{AddEditNaver}</TextAddNaver>
      <Form>
        <FormInput
          value={name}
          onChangeText={setName}
          onSubmitEditing={() => jobRef.current.focus()}
          label="Nome"
          placeholder="Nome"
        />
        <FormInput
          ref={jobRef}
          value={job}
          onChangeText={setJob}
          label="Cargo"
          placeholder="Cargo"
          onSubmitEditing={() => ageRef.current.focus()}
        />
        <FormInput
          ref={ageRef}
          value={age}
          onChangeText={handleDateAge}
          maxLength={10}
          label="Data de nascimento"
          placeholder="Data de nascimento"
          onSubmitEditing={() => admissionDateRef.current.focus()}
        />
        <FormInput
          ref={admissionDateRef}
          value={adimissionDate}
          onChangeText={handleDataAdmission}
          maxLength={10}
          label="Dia de admissão"
          placeholder="Dia de admissão"
          onSubmitEditing={() => projectRef.current.focus()}
        />
        <FormInput
          ref={projectRef}
          value={project}
          onChangeText={setProject}
          label="Projetos que participou"
          placeholder="Projetos que participou"
          onSubmitEditing={() => urlPhotoRef.current.focus()}
        />
        <FormInput
          ref={urlPhotoRef}
          value={urlPhoto}
          onChangeText={setUrlPhoto}
          label="URL da foto do naver"
          placeholder="URL da foto do naver"
          onSubmitEditing={addNaver}
        />
        {route.params ? (
          <SubmitButton loading={loading} onPress={updateNaver}>
            Salvar
          </SubmitButton>
        ) : (
          <SubmitButton loading={loading} onPress={addNaver}>
            Salvar
          </SubmitButton>
        )}
      </Form>
    </Container>
  );
}
