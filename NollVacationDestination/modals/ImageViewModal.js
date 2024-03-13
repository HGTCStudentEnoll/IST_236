import { Modal, View, Button, Image, StyleSheet } from "react-native";
import Colors from '../constants/colors';

//Function utilizing props to display image in modal.
function ImageViewModal(props) {
  return (

    //View holding modal for displaying image as well as a button to return.
    <View style={styles.container}>
      <Modal
        visible={props.isVisible}
        animationType="slide"
        transparent={false}
      >
        {/* View holding both image and return button. */}
        <View style={styles.modalContainer}>
            <Image style={styles.image} source={{ uri: props.imageUrl }} />
            <Button title="Return" onPress={props.onClose} />
        </View>
      </Modal>
    </View>
  );
}

//Exports ImageViewModal modal.
export default ImageViewModal;

//Beginning of modal styling.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary800,
  },
  image: {
    width: "100%",
    height: "80%",
    resizeMode: "contain",
  },
});
