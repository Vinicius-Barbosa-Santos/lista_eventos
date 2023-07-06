import {
    Text,
    TextInput,
    TouchableOpacity,
    SafeAreaView,
    View,
    FlatList,
    Alert
} from "react-native"

import { styles } from "./styles"
import { useState } from "react"
import Participant from "../../components/Participant"

const Home = () => {
    const [participantName, setParticipantName] = useState('')
    const [participants, setParticipants] = useState<string[]>([])

    const handleParticipantAdd = () => {
        if (participantName === '') {
            Alert.alert('Preencha o campo!')
        }

        if (participants.includes(participantName)) {
            Alert.alert('Participant existe', 'Já existe um partcipante na lista com esse nome.')
        }

        if (participantName !== '') {
            setParticipants([...participants, participantName])
            setParticipantName('')
        }
    }

    const handleRemoveParticipant = (name: string) => {
        Alert.alert("Remover", `Deseja Remover o participante? ${name}`, [
            {
                text: 'Sim',
                onPress: () => setParticipants(participants.filter((participantName) => participantName !== name))
            },
            {
                text: 'Não',
                style: 'cancel'
            }
        ])
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={{
                padding: 24
            }}>
                <Text style={styles.eventName}>
                    Nome do Evento
                </Text>

                <Text style={styles.eventDate}>
                    Domingo, 2 de Julho de 2023
                </Text>

                <View style={styles.form}>
                    <TextInput
                        style={styles.input}
                        value={participantName}
                        placeholder="Nome do Participante"
                        placeholderTextColor={"#6b6b6b"}
                        onChangeText={(e) => setParticipantName(e)}
                    />

                    <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
                        <Text style={styles.buttonText}>
                            +
                        </Text>
                    </TouchableOpacity>
                </View>

                <FlatList
                    data={participants}
                    keyExtractor={item => item}
                    renderItem={({ item }) => (
                        <Participant
                            key={item}
                            name={item}
                            onRemove={() => handleRemoveParticipant(item)} />
                    )}
                    showsVerticalScrollIndicator={false}
                    ListEmptyComponent={() => (
                        <Text style={styles.listEmptyText}>
                            Ninguém chagou no evento ainda? Adicione participante a lista de presença
                        </Text>
                    )}
                />
            </View>
        </SafeAreaView>
    )
}

export default Home
