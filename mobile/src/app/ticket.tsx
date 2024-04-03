import { useState } from 'react'
import {
  View,
  Text,
  Alert,
  Modal,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import * as ImagePicker from 'expo-image-picker'

import { colors } from '@/styles/colors'

import { Credential } from '@/components/credential'
import { Header } from '@/components/header'
import { Button } from '@/components/button'
import { QRCode } from '@/components/qrcode'

export default function Ticket() {
  const [image, setImage] = useState('')
  const [expandQRCode, setExpandQRCode] = useState(false)

  async function handleSelectImage() {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync()

    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 4],
        quality: 1,
      })

      if (result.assets) {
        setImage(result.assets[0].uri)
      }
    } catch (error) {
      console.log(error)
      Alert.alert('Foto', 'Não foi possível selecionar imagem')
    }
  }
  return (
    <View className="flex-1 bg-green-500">
      <StatusBar barStyle="light-content" />
      <Header title="Minha Credencial" />

      <ScrollView
        className="-mt-28 -z-10"
        contentContainerClassName="px-8 pb-8"
        showsVerticalScrollIndicator={false}
      >
        <Credential
          image={image}
          onChangeAvatar={handleSelectImage}
          onExpandQRCode={() => setExpandQRCode(true)}
        />
        <FontAwesome
          name="angle-double-down"
          color={colors.gray[300]}
          size={24}
          className="self-center my-6"
        />
        <Text className=" text-white text-bold text-2xl mt-4">
          Compartilhar credencial
        </Text>
        <Text className="text-white text-regular text-bsae mb-6 mt-1">
          Mostre ao mundo que você vai participar do Unite Summit!
        </Text>

        <Button title="Compartilhar" />

        <TouchableOpacity activeOpacity={0.7} className="mt-10">
          <Text className="text-white text-center font-bold text-base ">
            Não vai mais participar do evento?
          </Text>
        </TouchableOpacity>
      </ScrollView>

      <Modal
        visible={expandQRCode}
        animationType="fade"
        statusBarTranslucent
        transparent
        onRequestClose={() => setExpandQRCode(false)}
      >
        <View className="flex-1 bg-green-500 items-center justify-center">
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => setExpandQRCode(false)}
          >
            <QRCode value="teste" size={300} />
            <Text className="text-sm text-orange-500 font-body mt-10 text-center">
              Fechar
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  )
}
