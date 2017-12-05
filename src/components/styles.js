import {
    StyleSheet
} from 'react native';

//style chung cho item Flatlist
const styles = StyleSheet.create({
    container: {
        marginLeft:10,
        marginTop:10, 
    },
    itemView: {
        flexDirection: 'row', 
    },
    textL: {
        fontWeight:'bold'
    },
})
export default styles;
// style chung cho text
const style = StyleSheet.create({
    textL: {
        marginTop: 20,
        marginLeft: 15,
        
        fontWeight:'bold'
    },
    textR: {
        marginTop: 20,

    }
})