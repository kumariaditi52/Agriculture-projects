import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

interface CropData {
  name: string;
  stage: string;
  health: 'Good' | 'Warning' | 'Critical';
  daysToHarvest: number;
}

interface CropCardProps {
  crop: CropData;
  onPress: () => void;
}

export const CropCard: React.FC<CropCardProps> = ({crop, onPress}) => {
  const getHealthColor = (health: string) => {
    switch (health) {
      case 'Good': return '#7ED321';
      case 'Warning': return '#F5A623';
      case 'Critical': return '#D0021B';
      default: return '#7ED321';
    }
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.header}>
        <Text style={styles.cropName}>{crop.name}</Text>
        <View style={[styles.healthIndicator, {backgroundColor: getHealthColor(crop.health)}]} />
      </View>
      <Text style={styles.stage}>Stage: {crop.stage}</Text>
      <Text style={styles.harvest}>Harvest in {crop.daysToHarvest} days</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  cropName: {
    fontSize: 18,
    fontWeight: '600',
  },
  healthIndicator: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
  stage: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  harvest: {
    fontSize: 14,
    color: '#666',
  },
});