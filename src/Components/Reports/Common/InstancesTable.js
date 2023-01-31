import React from 'react';
import propTypes from 'prop-types';
import { Text, View } from '@react-pdf/renderer';
import styles from './styles';

export const InstancesTable = ({ id, instanceDetails, heading, description }) => {
    return (
        <View>
            <Text style={id === 'current_instance_types' ? styles.instanceTypeHeadingFirst : styles.instanceTypeHeading}>{heading}</Text>
            <Text style={styles.instanceTypeDesc}>{description}</Text>
            <View key={id} style={styles.flexRow}>
                <Text style={[{ width: 100 }, styles.instanceTableHeading]}>Instance type</Text>
                <Text style={[{ width: 80 }, styles.instanceTableHeading]}>
                    {`# of ${ id === 'historical_instance_types' ? 'times' : 'systems'}`}
                </Text>
                <Text style={[{ flex: 1 }, styles.instanceTableHeading]}>Description</Text>
            </View>
            {
                instanceDetails.length > 0 ?
                    instanceDetails.map(
                        (instanceDetail, index) => <View key={`${id}-${index}`} style={{
                            ...styles.flexRow,
                            ...(index % 2 && { ...styles.tableRowBackground }) }}>
                            <Text style={{ width: 100 }}>{instanceDetail.type}</Text>
                            <Text style={{ width: 80, paddingLeft: 4 }}>{instanceDetail.count}</Text>
                            <Text style={{ flex: 1 }}>{instanceDetail.desc}</Text>
                        </View>)
                    : <Text style={styles.instanceTableHeading}>No data available.</Text>
            }
        </View>
    );
};

InstancesTable.propTypes = {
    id: propTypes.string,
    instanceDetails: propTypes.array,
    heading: propTypes.string,
    description: propTypes.string
};

