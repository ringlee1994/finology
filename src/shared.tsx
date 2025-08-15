import { Dimensions, StyleSheet } from "react-native";

const screenInfo = {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
}


const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    backgroundObject: {
        white: { backgroundColor: 'white' },
    },

    color: {
        black: 'black',
        grey: 'grey',
        purple: 'purple',
    },

    colorObject: {
        black: { color: 'black' },
        blue: { color: 'blue' },
        grey: { color: 'grey' },
        purple: { color: 'purple' },
    },




    icon: {
        account: 'account',
        accountgroup: 'account-group',
        accountoutline: "account-outline",
        airplane: 'airplane',
        alertboxoutline: 'alert-box-outline',
        alertoctagon: "alert-octagon",
        arrowdown: 'arrow-down',
        arrowdownbold: 'arrow-down-bold',
        arrowright: 'arrow-right',
        arrowupbold: 'arrow-up-bold',
        back: 'keyboard-backspace',
        barchart: 'bar-chart',
        bell: 'bell',
        billboard: 'billboard',
        bookopen2: 'book-open-page-variant-outline',
        call1: 'call-sharp',
        calendaroutline: 'calendar-month-outline',
        cameraplus: "camera-plus-outline",
        camera: 'camera',
        cameraimage: 'camera-image',
        cardaccount: 'card-account-details',
        carinfo: 'car-info',
        carsports: 'car-sports',
        cellphone: "cellphone",
        cellphonebasic: "cellphone-basic",
        chevrondown: 'chevron-down',
        chevronright: 'chevron-right',
        chevronup: "chevron-up",
        carchildset: 'car-child-seat',
        contentcopy: "content-copy",
        dashboard: 'desktop-mac-dashboard',
        directionicon: 'directions',
        doc1: 'document-text',
        doc2: 'document-text-outline',
        earth1: 'earth-sharp',
        earth2: 'earth-outline',
        email: 'email-outline',
        eye: 'eye',
        facebook: 'facebook',
        googlemaps: 'google-maps',
        heart1: 'heart-outline',
        heart2: 'heart-sharp',
        homeoutline: 'home-outline',
        homesharp: 'home-sharp',
        instagram: 'instagram',
        language: 'translate',
        latest: 'trending-up',
        listios1: 'ios-list',
        listios2: 'ios-list-outline',
        magnify: 'magnify',
        moon: 'moon-waning-crescent',
        moonfull: 'moon-full',
        note1: 'note-search',
        note2: 'note-search-outline',
        notebook1: 'notebook-edit',
        notebook2: 'notebook-edit-outline',
        phone: 'phone',
        pin: 'pin',
        pinoutline: 'pin-outline',
        play2: 'play-circle-outline',
        search: 'search-sharp',
        search2: 'search',
        settings1: 'settings-sharp',
        settings2: 'settings-outline',
        share2: 'share-outline',
        smartcard: 'smart-card',
        spotify: 'spotify',
        star1: 'star',
        star2: 'star-outline',
        tiktok: 'logo-tiktok',
        timeios1: 'ios-time-sharp',
        timeios2: 'ios-time-outline',
        tour: 'navigation-variant',
        training: 'shield-car',
        whatsapp: 'whatsapp',
        windowclose: "window-close",
        youtube: 'youtube',
        youtube2: 'logo-youtube',
        x: 'square-x-twitter',
    },




    alignItems: {
        center: { alignItems: 'center' },
        flexend: { alignItems: 'flex-end' },
    },
    alignSelf: {
        center: { alignSelf: 'center' },
        flexend: { alignSelf: 'flex-end' }
    },
    flex: {
        flex: 1,
    },
    flexOther: {
        f2: { flex: 2 }
    },
    flexGrow: {
        flexGrow: 1,
    },
    flexDirection: {
        row: { flexDirection: 'row' },
        rowReverse: { flexDirection: 'row-reverse' },
    },
    flexWrap: {
        flexWrap: 'wrap',
    },
    fontSize: {
        fs10: { fontSize: 10 },
        fs11: { fontSize: 11 },
        fs12: { fontSize: 12 },
        fs14: { fontSize: 14 },
        fs16: { fontSize: 16 },
        fs18: { fontSize: 18 },
        fs20: { fontSize: 20 },
        fs32: { fontSize: 32 },
    },
    fontWeight: {
        bold: { fontWeight: 'bold' },
        normal: { fontWeight: 'normal' },
    },
    justifyContent: {
        center: { justifyContent: 'center' },
        flexend: { justifyContent: 'flex-end' },
        spacebetween: { justifyContent: 'space-between' },
        spaceevenly: { justifyContent: 'space-evenly' },
    },
    margin: {
        m5: { margin: 5 },
        m10: { margin: 10 },
        m20: { margin: 20 },
    },
    marginBottom: {
        mb4: { marginBottom: 4 },
        mb8: { marginBottom: 8 },
        mb10: { marginBottom: 10 },
        mb12: { marginBottom: 12 },
        mb16: { marginBottom: 16 },
        mb20: { marginBottom: 20 },
        mb30: { marginBottom: 30 },
        mb40: { marginBottom: 40 },
    },
    marginHorizontal: {
        mh2: { marginHorizontal: 2 },
        mh5: { marginHorizontal: 5 },
        mh10: { marginHorizontal: 10 },
        mh13: { marginHorizontal: 13 },
        mh15: { marginHorizontal: 15 },
        mh20: { marginHorizontal: 20 },
        mh40: { marginHorizontal: 40 },
    },
    marginRight: {
        mr10: { marginRight: 10 },
        mr20: { marginRight: 20 },
    },
    marginTop: {
        mt5: { marginTop: 5 },
        mt10: { marginTop: 10 },
        mt16: { marginTop: 16 },
        mt20: { marginTop: 20 },
        mt60: { marginTop: 60 },
        mt80: { marginTop: 80 },
    },
    marginVertical: {
        mv1: { marginVertical: 1 },
        mv3: { marginVertical: 3 },
        mv5: { marginVertical: 5 },
        mv6: { marginVertical: 6 },
        mv10: { marginVertical: 10 },
        mv15: { marginVertical: 15 },
        mv16: { marginVertical: 16 },
        mv20: { marginVertical: 20 },
    },
    padding: {
        p2: { padding: 2 },
        p5: { padding: 5 },
        p10: { padding: 10 },
        p16: { padding: 16 },
    },
    paddingBottom: {
        pb5: { paddingBottom: 5 },
        pb10: { paddingBottom: 10 },
        pb30: { paddingBottom: 30 },
    },
    paddingHorizontal: {
        ph5: { paddingHorizontal: 5 },
        ph10: { paddingHorizontal: 10 },
        ph20: { paddingHorizontal: 20 },
    },
    paddingLeft: {
        pl5: { paddingLeft: 5 },
        pl10: { paddingLeft: 10 }
    },
    paddingRight: {
        pr20: { paddingRight: 20 }
    },
    paddingTop: {
        pt10: { paddingTop: 10 },
        pt25: { paddingTop: 25 }
    },
    paddingVertical: {
        pv5: { paddingVertical: 5 },
        pv15: { paddingVertical: 15 },
        pv20: { paddingVertical: 20 },
    },
    textAlign: {
        center: { textAlign: 'center' },
        right: { textAlign: 'right' },
    },
    textAlignVertical: {
        center: { textAlignVertical: 'center' },
    }
});

export { styles, screenInfo }