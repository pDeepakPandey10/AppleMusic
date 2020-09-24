import React, { Component } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet, Image } from 'react-native';

class SearchList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            data_api: []
        }
    }
    componentDidMount() {
        fetch('https://itunes.apple.com/search?term=' + this.props.route.params.data + '&limit=25')
            .then((response) =>
                response.json())
            .then((responseJson) => {
                this.setState({ data_api: responseJson.results });
                console.log(this.state.data_api)
            }).catch((error) => console.error(error)).finally(() => {
                this.setState({ isLoading: false });
            });
    }
    renderItem = ({ item }) => {
        console.log('item ' + item)
        return (
            <View style={styles.result_container}>
                <View style={{borderBottomColor:'#888', flexDirection: 'row'}}>
                    <Image source={{ uri: item.artworkUrl100 }}
                        style={{ height: 100, width: 100 }}></Image>
                        <View style={{ flexDirection: 'column'}}>
                        <Text style={styles.text_artistName}>{"Artist : " + item.artistName}</Text>
                        <Text style={styles.text_artistName}>{"Artist : " + item.trackName}</Text>
                        <Text style={styles.text_artistName}>{"Artist : " + item.collectionName}</Text>
                        </View>
                </View>
            </View>
        )
    }
    render() {
        console.log('https://itunes.apple.com/search?term=' + this.props.route.params.data + '&limit=25');
        if (this.state.isLoading) {
            return (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <ActivityIndicator color="#0000ff" size="large" />
                </View>
            )
        }
        return (
            <View style={{ flex: 1, backgroundColor: '#fff', marginTop: 50 }}>
                <FlatList data={this.state.data_api}
                    renderItem={this.renderItem} keyExtractor={() => Math.random().toString()} />
            </View>
        )
    }
}

export default SearchList;

const styles = StyleSheet.create({
    result_container: {
        flex: 1,
        marginTop: 10,
        borderColor: "#000",
        backgroundColor: '#fff',
        borderRadius: 10
    },
    text_artistName: {
        marginHorizontal: 10,
        marginTop: 10,
        fontSize: 16,
        color: '#333'
    },
    text_count: {
        marginHorizontal: 10,
        marginTop: 10,
        fontSize: 16,
        color: '#333'
    }
})