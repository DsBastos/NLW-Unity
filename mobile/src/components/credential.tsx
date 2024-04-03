import { Image, ImageBackground, Text, View } from 'react-native'

export function Credential() {
  return (
    <View className="w-full self-stretch items-center bg-green-500">
      <Image
        className="w-24 h-52 z-10"
        source={require('@/assets/ticket/band.png')}
      />

      <View
        className="bg-black/20 self-stretch items-center pb-6 border
       border-white/10 mx-3 rounded-2xl mt-5"
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

        <Image
          source={{ uri: 'https://github.com/dsbastos.png' }}
          className="w-36 h-36 rounded-full -mt-24"
        />
        <Text className="text-zinc-50 font-bold mt-4 text-2xl">
          Daniel Bastos
        </Text>
      </View>
    </View>
  )
}
