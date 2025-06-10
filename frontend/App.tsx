/**
 * AgriChar - Agriculture Management App
 * React Native Application
 *
 * @format
 */

import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

type FeatureCardProps = PropsWithChildren<{
  title: string;
  icon: string;
  onPress: () => void;
}>;

function FeatureCard({children, title, icon, onPress}: FeatureCardProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <TouchableOpacity style={styles.featureCard} onPress={onPress}>
      <View style={styles.featureIconContainer}>
        <Text style={styles.featureIcon}>{icon}</Text>
      </View>
      <Text style={[styles.featureTitle, {color: isDarkMode ? Colors.white : Colors.black}]}>
        {title}
      </Text>
      <Text style={[styles.featureDescription, {color: isDarkMode ? Colors.light : Colors.dark}]}>
        {children}
      </Text>
    </TouchableOpacity>
  );
}

type QuickActionProps = {
  title: string;
  icon: string;
  color: string;
  onPress: () => void;
};

function QuickAction({title, icon, color, onPress}: QuickActionProps): React.JSX.Element {
  return (
    <TouchableOpacity style={[styles.quickAction, {backgroundColor: color}]} onPress={onPress}>
      <Text style={styles.quickActionIcon}>{icon}</Text>
      <Text style={styles.quickActionTitle}>{title}</Text>
    </TouchableOpacity>
  );
}

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [selectedTab, setSelectedTab] = useState('home');

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const handleFeaturePress = (feature: string) => {
    console.log(`Navigating to ${feature}`);
    // Here you would navigate to specific screens
  };

  return (
    <SafeAreaView style={[styles.container, backgroundStyle]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={[styles.headerTitle, {color: isDarkMode ? Colors.white : Colors.black}]}>
          🌾 AgriChar
        </Text>
        <Text style={[styles.headerSubtitle, {color: isDarkMode ? Colors.light : Colors.dark}]}>
          Smart Agriculture Management
        </Text>
      </View>

      <ScrollView style={backgroundStyle} showsVerticalScrollIndicator={false}>
        {/* Quick Actions */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, {color: isDarkMode ? Colors.white : Colors.black}]}>
            Quick Actions
          </Text>
          <View style={styles.quickActionsContainer}>
            <QuickAction
              title="Weather"
              icon="🌤️"
              color="#4A90E2"
              onPress={() => handleFeaturePress('weather')}
            />
            <QuickAction
              title="Market"
              icon="📈"
              color="#7ED321"
              onPress={() => handleFeaturePress('market')}
            />
            <QuickAction
              title="Crops"
              icon="🌱"
              color="#F5A623"
              onPress={() => handleFeaturePress('crops')}
            />
            <QuickAction
              title="Livestock"
              icon="🐄"
              color="#BD10E0"
              onPress={() => handleFeaturePress('livestock')}
            />
          </View>
        </View>

        {/* Main Features */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, {color: isDarkMode ? Colors.white : Colors.black}]}>
            Farm Management
          </Text>
          
          <FeatureCard
            title="Crop Management"
            icon="🌾"
            onPress={() => handleFeaturePress('crop-management')}>
            Monitor crop health, plan planting schedules, and track growth stages with AI-powered insights.
          </FeatureCard>

          <FeatureCard
            title="Field Mapping"
            icon="🗺️"
            onPress={() => handleFeaturePress('field-mapping')}>
            Map your fields, monitor soil conditions, and optimize land usage with GPS technology.
          </FeatureCard>

          <FeatureCard
            title="Inventory Management"
            icon="📦"
            onPress={() => handleFeaturePress('inventory')}>
            Track seeds, fertilizers, pesticides, and equipment. Get alerts for low stock levels.
          </FeatureCard>

          <FeatureCard
            title="Financial Tracking"
            icon="💰"
            onPress={() => handleFeaturePress('finance')}>
            Monitor expenses, revenue, and profitability. Generate reports for better decision making.
          </FeatureCard>
        </View>

        {/* Market & Information */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, {color: isDarkMode ? Colors.white : Colors.black}]}>
            Market & Information
          </Text>
          
          <FeatureCard
            title="Market Prices"
            icon="💹"
            onPress={() => handleFeaturePress('market-prices')}>
            Get real-time market prices for crops and find the best buyers in your area.
          </FeatureCard>

          <FeatureCard
            title="Weather Forecast"
            icon="🌦️"
            onPress={() => handleFeaturePress('weather-forecast')}>
            7-day weather forecast with agricultural advisories and alerts for extreme conditions.
          </FeatureCard>

          <FeatureCard
            title="Crop Doctor"
            icon="🔬"
            onPress={() => handleFeaturePress('crop-doctor')}>
            AI-powered disease detection and treatment recommendations for healthier crops.
          </FeatureCard>

          <FeatureCard
            title="Government Schemes"
            icon="🏛️"
            onPress={() => handleFeaturePress('schemes')}>
            Access information about agricultural schemes, subsidies, and government programs.
          </FeatureCard>
        </View>

        {/* Precision Agriculture */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, {color: isDarkMode ? Colors.white : Colors.black}]}>
            Precision Agriculture
          </Text>
          
          <FeatureCard
            title="Soil Analysis"
            icon="🧪"
            onPress={() => handleFeaturePress('soil-analysis')}>
            Analyze soil health, pH levels, and nutrient content for optimal crop growth.
          </FeatureCard>

          <FeatureCard
            title="Yield Prediction"
            icon="📊"
            onPress={() => handleFeaturePress('yield-prediction')}>
            AI-powered yield forecasting based on weather, soil, and crop data.
          </FeatureCard>
        </View>

        <View style={styles.bottomPadding} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 20,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 16,
    fontWeight: '400',
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 16,
  },
  quickActionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  quickAction: {
    width: '22%',
    aspectRatio: 1,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  quickActionIcon: {
    fontSize: 24,
    marginBottom: 4,
  },
  quickActionTitle: {
    color: 'white',
    fontSize: 12,
    fontWeight: '600',
    textAlign: 'center',
  },
  featureCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  featureIconContainer: {
    marginBottom: 8,
  },
  featureIcon: {
    fontSize: 32,
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  featureDescription: {
    fontSize: 14,
    lineHeight: 20,
  },
  bottomPadding: {
    height: 20,
  },
});

export default App;
