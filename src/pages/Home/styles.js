import styled from "styled-components/native";
import Button from "../../components/Button";

export const Container = styled.View``;

export const SubHeader = styled.View`
  margin: 20px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const TextNaver = styled.Text`
  text-align: left;
  font-size: 22px;
  line-height: 32px;
  color: #212121;
`;

export const AddNaverButton = styled(Button)`
  width: 155px;
`;

export const ViewNavers = styled.FlatList`
  margin-bottom: 20px;
  z-index: -1000;
`;

export const ViewOneNaver = styled.View`
  width: 45%;
  margin-left: 20px;
  margin-top: 30px;
`;

export const ImageNaver = styled.Image`
  width: 156.56px;
  height: 170px;
`;

export const TouchImage = styled.TouchableOpacity``;

export const TextNameNaver = styled.Text`
  font-size: 14px;
  line-height: 20px;
  margin-top: 10px;
  font-weight: bold;
`;

export const TextJobNaver = styled.Text`
  font-size: 14px;
  margin-top: 10px;
  line-height: 16px;
`;

export const ViewTrashAndPencil = styled.View`
  flex-direction: row;
  margin-top: 15px;
  margin-left: -20px;
`;

export const ImageTrashAndPencil = styled.Image`
  margin-left: 20px;
`;

export const ViewForModal = styled.View``;
