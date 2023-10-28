import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#ADD8E6',
  },
  buttonText: {
    marginLeft: 10,
    color: '#FFFFFF',
    fontSize: 34,
  },
};

function DashboardScreen({navigation}){
    return (
        <View style={styles.container}>
<Text style={{fontSize: 22}}>Welcome to the Dashboard</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('VirtualClass')}
          >
            <Icon name="graduation-cap" size={20} color="white" />
            <Text style={styles.buttonText}>Virtual Class</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Exam')}
          >
            <Icon name="file-text" size={20} color="white" />
            <Text style={styles.buttonText}>Exam</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Assignment')}
          >
            <Icon name="pencil" size={20} color="white" />
            <Text style={styles.buttonText}>Assignment</Text>
          </TouchableOpacity>
        </View>
      );
}

export default DashboardScreen;
