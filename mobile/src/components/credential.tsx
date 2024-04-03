import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native'
import { Feather } from '@expo/vector-icons'
import { colors } from '@/styles/colors'
import { QRCode } from '@/components/qrcode'

type Props = {
  image?: string
  onChangeAvatar?: () => void
  onExpandQRCode?: () => void
}

export function Credential({ onChangeAvatar, onExpandQRCode, image }: Props) {
  return (
    <View className="w-full self-stretch items-center bg-green-500">
      <Image
        className="w-24 h-52 z-10"
        source={require('@/assets/ticket/band.png')}
      />

      <View
        className="bg-black/20 self-stretch items-center pb-6 border
       border-white/10 mx-3 rounded-2xl -mt-5"
      >
        <ImageBackground
          source={require('@/assets/ticket/header.png')}
          className="px-6 py-8 h-40 items-center self-stretch border-b border-white/10 overflow-hidden"
        >
          <View className="w-full flex-row items-center justify-between">
            <Text className="text-zinc-50 text-sm font-bold">Unite submit</Text>
            <Text className="text-zinc-50 text-sm font-bold">123</Text>
          </View>

          <View className="w-40 h-40 bg-black rounded-full" />
        </ImageBackground>

        {image ? (
          <TouchableOpacity activeOpacity={0.9} onPress={onChangeAvatar}>
            <Image
              source={{ uri: image }}
              className="w-36 h-36 rounded-full -mt-24"
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            activeOpacity={0.9}
            className="w-36 h-36 rounded-full -mt-24 bg-gray-400 items-center justify-center"
            onPress={onChangeAvatar}
          >
            <Feather
              name="camera"
              size={32}
              color={colors.green[400]}
              onPress={onChangeAvatar}
            />
          </TouchableOpacity>
        )}

        <Text className="text-zinc-50 font-bold mt-4 text-2xl">
          Daniel Bastos
        </Text>

        <Text className="font-regular text-base text-zinc-300 mb-4">
          dsbastos1@hotmail.com
        </Text>

        <QRCode value="https://unitesubmit.com" size={120} />

        <TouchableOpacity activeOpacity={0.7} onPress={onExpandQRCode}>
          <Text className="text-sm text-orange-500 font-body mt-5">
            Ampliar QRCode
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
