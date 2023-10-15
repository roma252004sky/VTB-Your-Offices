import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Image, Pressable, } from 'react-native';
import { vw, vh } from 'react-native-expo-viewport-units';

import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

export default function App() {
    const [text, onChangeText] = React.useState('Useless Text');
    const [number, onChangeNumber] = React.useState('');
  return (
      <View style={styles.wrapper}>
          <View style={styles.container}>
              <View style={styles.header}>
                  <View style={styles.logoContainer}>
                      <Pressable onPress={() => alert('You pressed a button.')}>
                          <Image source={require('./assets/images/VTB_logo_ru.png')} style={styles.logoIcon}/>
                      </Pressable>
                  </View>
                  <Pressable style={styles.menuContainer} onPress={() => alert('You pressed a button.')}>
                      <Image source={require('./assets/images/notifications.png')} style={styles.menuIcon}/>
                  </Pressable>
                  <Pressable style={styles.menuContainer} onPress={() => alert('You pressed a button.')}>
                      <Image source={require('./assets/images/menu.png')} style={styles.menuIcon}/>
                  </Pressable>
              </View>
          </View>
          <View style={styles.imageContainer}>
              <WebView
                  scalesPageToFit={true}
                  bounces={false}
                  javaScriptEnabled
                  style={{ height: 700, width: vw(100) }}
                  source={{
                      html: `
                  <div style="overflow:hidden;"><a href="https://yandex.ru/maps/org/vtb/1642144681/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:0px;">ВТБ</a><a href="https://yandex.ru/maps/194/saratov/category/atm/184105402/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:14px;">Банкомат в Саратове</a><iframe src="https://yandex.ru/map-widget/v1/?filter=chain_id%3A48064199351&ll=45.977806%2C51.529780&mode=search&oid=1642144681&ol=biz&sctx=ZAAAAAgBEAAaKAoSCbZN8bio5kZAES3NrRBWz0lAEhIJQUmBBTBl%2BT8Rfa8hOC7j4T8iBgABAgMEBSgAOABAxc0GSAFiL3JlbGV2X3RvcG9ueW1fZm9ybXVsYT10b3BfZGMzMDU2NTFfY29udmV5b3JfZXhwYipjb2xsZWN0aW9uc19yYW5raW5nX21vZGVsPWNvbGxlY3Rpb25zX2Rzc21qAnJ1ggEUY2hhaW5faWQ6NDgwNjQxOTkzNTGdAc3MTD2gAQCoAQC9AWrshmjCAWCpx4SPBtLu26%2BEBv7%2BnvYEzpWy6AXkq4TlesXV2veiA42Rz4kGot%2Fm%2BAXa7uOPrgSF48DqoAGDzOicBrmY%2BogG2ICC5QWahdCUBY695KTUAdSWtYsG0bTli40BrOT0hQbqAQDyAQD4AQCCAhRjaGFpbl9pZDo0ODA2NDE5OTM1MYoCAJICAJoCDGRlc2t0b3AtbWFwc6oCpAE0ODA2NDE5OTM1MSwxODgyMDg3NTYsMjM4Nzk3NTkwMTQsMTEzOTQ5Njc2MCw5OTQxNTgyNTksMjcxMDI4NzQ0Miw5OTQxNjAyODMsMjE5OTg4OTAyMywxOTczMTgxNTAyMzUsMTU2NTQ3Njc5MCwxOTI4MTM0NTAyLDIyNjY2MTg2NzAsMTM3MDY4NzQ4MywyNTgwMDA5MTAyLDk4MTIzMTk0NrACAQ%3D%3D&sll=45.982326%2C51.537100&sspn=0.065448%2C0.023092&text=%D0%B2%D1%82%D0%B1&z=14.21" width="100%" height="100%" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe></div>
            `,
                  }}
                  automaticallyAdjustContentInsets={false}
              />

          </View>
          {/*<View style={styles.container}>*/}
          {/*    <View style={styles.navHeader}>*/}
          {/*        <Pressable style={styles.navButton} onPress={() => alert('You pressed a button.')}>*/}
          {/*            <Text style={{color: '#fff', fontWeight: 'bold'}}>Банкоматы</Text>*/}
          {/*        </Pressable>*/}
          {/*        <Pressable style={styles.navButton} onPress={() => alert('You pressed a button.')}>*/}
          {/*            <Text style={{color: '#fff', fontWeight: 'bold'}}>Отделения</Text>*/}
          {/*        </Pressable>*/}
          {/*    </View>*/}
          {/*</View>*/}
          <View style={styles.container}>
              <View style={styles.chat}>
                  <View style={styles.chatBox}>
                      <View style={styles.botMessage}>
                          <Text style={{color: '#fff'}}>Отпраьте мне Ваш запрос, а я найду для вас оптимальное отделение</Text>
                      </View>
                      <View style={styles.message}>
                          <Text>Мне нужно положить крупную сумму на счет</Text>
                      </View>
                      <View style={styles.botMessage}>
                          <Text style={{color: '#fff'}}>Хорошо, вот оптимальное для Вас отделение - Саратов, ул.Советская, ул.51</Text>
                      </View>
                      <View style={styles.botMessage}>
                          <Text style={{color: '#fff'}}>Если сумма до 200 тыс.руб, можете воспользоваться ближайшим банкоматом - ул. имени Е.И. Пугачёва, 96</Text>
                      </View>
                  </View>
                  <View style={styles.inputContainer}>
                      <TextInput
                          style={styles.input}
                          onChangeText={onChangeNumber}
                          value={number}
                          placeholder="Введите ваш запрос"
                      />
                  </View>
              </View>
          </View>
          <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        width: vw(100),
        minHeight: '100%',
        alignItems: 'center',
        overflow: "scroll",
    },
    container: {
        width: '100%',
        backgroundColor: '#fff',
        paddingLeft: 5,
        paddingRight: 5,
    },
    header: {
        marginTop: 50,
        marginBottom: 5,
        display: "flex",
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
    },
    menuContainer: {
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
    },
    menuIcon: {
        width: 18,
        minHeight: '100%',
        resizeMode: "contain",
    },
    logoContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        height: 40,
    },
    logoIcon: {
        width: 100,
        height: 60,
        resizeMode: "contain",
    },
    imageContainer: {
        alignItems: 'center',
        width: vw(100),
        height: 280,
    },
    image: {
        width: vw(100),
        height: 280,
    },
    navHeader: {
        marginTop: 10,
        display: "flex",
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
        overflow: "hidden",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,
    },
    navButton: {
        height: 40,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#002882',
    },
    map: {
        width: '100%',
        height: '100%',
    },
    chat: {
        maxWidth: vw(100),
        minHeight: 370,
        display: "flex",
        flexDirection: "column",
        flex: 1,
        marginTop: 5,
        borderRadius: 6,
        borderColor: '#002882',
        borderWidth: 1,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
        backgroundColor: '#fff',
    },
    chatBox: {
        flex: 1,
        justifyContent: "flex-end",
    },
    inputContainer: {
        height: 60,
        justifyContent: "center",
        alignItems: "flex-start",
        textAlignVertical: "center",
        marginTop: 15,
        padding: 10,
        borderRadius: 6,
        borderTopColor: '#002882',
        borderTopWidth: 1,
    },
    botMessage: {
        marginTop: 15,
      marginLeft: 5,
      marginRight: 30,
        padding: 10,
        backgroundColor: '#002882',
        borderRadius: 6,
    },
    message: {
        display: "flex",
        marginTop: 15,
        marginLeft: 30,
        marginRight: 15,
        padding: 10,
        borderRadius: 6,
        borderColor: '#002882',
        borderWidth: 1,
    },
});
