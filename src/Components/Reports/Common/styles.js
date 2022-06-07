import { StyleSheet } from '@react-pdf/renderer';

export default StyleSheet.create({
    bodyCell: {
        textAlign: 'left',
        fontSize: 8,
        paddingBottom: 2,
        paddingTop: 2,
        paddingRight: 2,
        flex: 1
    },
    headerCell: {
        textAlign: 'left',
        fontSize: 8,
        flex: 1
    },
    systemNameCell: {
        textAlign: 'left',
        fontSize: 8,
        flex: 2.5,
        paddingBottom: 2,
        paddingTop: 2,
        paddingRight: 2
    },
    lastReportedCell: {
        textAlign: 'left',
        fontSize: 8,
        flex: 1.2,
        paddingBottom: 2,
        paddingTop: 2,
        paddingRight: 2
    },
    headerStyle: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },

    rowStyle: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    execHeading: {
        textAlign: 'left',
        fontSize: 10,
        color: '#C9190B',
        marginBottom: 4,
        marginTop: 10
    },
    occuranceHeading: {
        textAlign: 'left',
        fontSize: 10,
        color: '#C9190B',
        marginTop: 12,
        marginBottom: -4
    },
    execInfoText: {
        flex: 1,
        textAlign: 'right',
        fontSize: 6
    }

});
