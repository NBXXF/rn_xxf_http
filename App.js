/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {ajax} from 'rxjs/observable/dom/ajax';


type Props = {};
export default class App extends Component<Props> {
    onBtnClick() {
        ajax.getJSON(`https://suggest.taobao.com/sug?code=utf-8&q=手机&callback=cb`)
            .subscribe({
                next: item => console.log(item),
                error: e => console.log(e),
                complete: () => console.log('complete')
            })
    }

    render() {
        return (
            <View>
                <Text onPress={this.onBtnClick.bind(this)}>click</Text>

            </View>
        );
    }
}

