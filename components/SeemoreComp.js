import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Modal,
} from "react-native";
import Text from "../fonts/Text";

const ImageDisplay = ({ image, onClose }) => {
  return (
    <Modal animationType="slide" visible={true} onRequestClose={onClose}>
      <View style={styles.imageDisplayContainer}>
        <Image source={{uri:image}} style={styles.imageDisplay} resizeMode="contain" />
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <Text style={styles.closeButtonText}>Close</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const PhotoGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImagePress = (index) => {
    setSelectedImage(images[index]);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {images.map((image, index) => (
          <TouchableOpacity key={index} onPress={() => handleImagePress(index)}>
            <Image
              source={{uri:image}}
              style={[
                styles.image,
                selectedImage === image ? styles.selectedImage : null,
              ]}
              resizeMode="cover"
            />
            {selectedImage !== image && <View style={styles.imageOverlay} />}
          </TouchableOpacity>
        ))}
      </ScrollView>
      {selectedImage && (
        <ImageDisplay image={selectedImage} onClose={handleClose} />
      )}
      <TouchableOpacity activeOpacity={0.5} style={styles.button}>
        <Text style={styles.buttonText}>See more images</Text>
        <Image
          source={require("../assets/Vector-27.png")}
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
  },
  image: {
    width: 55,
    height: 55,
    marginRight: 10,
    borderRadius: 5,
  },
  selectedImage: {
    borderWidth: 2,
    borderColor: "#000",
  },

  button: {
    marginTop: 10,
    borderRadius: 5,
    flexDirection: "row",
  },
  buttonText: {
    fontSize: 12,
    textDecorationLine: "underline",
    marginTop: 5,
    marginBottom: 5,
  },
  icon: {
    width: 16,
    height: 16,
    resizeMode: "contain",
    alignSelf: "center",
    marginLeft: 8,
  },
  imageDisplayContainer: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
  imageDisplay: {
    width: "100%",
    height: "100%",
  },
  closeButton: {
    position: "absolute",
    top: 20,
    right: 20,
  },
  closeButtonText: {
    color: "#fff",
    fontSize: 18,
  },
});

export default PhotoGallery;
