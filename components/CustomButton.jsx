import { TouchableOpacity, Text } from 'react-native'
import React from 'react'

const CustomButton = ({ title, handlePress, containerStyle, textStyle, isLoading }) => {
    return (
        <TouchableOpacity
            onPress={handlePress}
            activeOpacity={0.7}
            className={`bg-secondary-200 w-full py-3 mt-5 rounded-lg ${containerStyle} ${isLoading ? 'opacity-50' : ''}`}
            disabled={isLoading}>
            <Text className={`text-primary text-center font-bold font-psemibold text-lg ${textStyle}`}>
                {title}
            </Text>
        </TouchableOpacity >
    )
}

export default CustomButton