import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { COLORS, FONTS, icons, SIZES } from '../constants';
import LineDivider from './LineDivider';

const Header = ({ profile }) => {
  const [time, setTime] = React.useState('');

  React.useEffect(() => {
    const today = new Date();
    const currentHour = today.getHours();

    if (currentHour < 12) {
      setTime('Good Morning');
    } else if (currentHour < 18) {
      setTime('Good Afternoon');
    } else {
      setTime('Good Evening');
    }
  }, []);

  function renderHeader() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          paddingHorizontal: SIZES.padding,
          alignItems: 'center',
        }}>
        {/* Greeting */}
        <View style={{ flex: 1 }}>
          <View style={{ marginRight: SIZES.padding }}>
            <Text style={{ ...FONTS.h3, color: COLORS.white }}>{time}</Text>
            <Text style={{ ...FONTS.h2, color: COLORS.white }}>
              {profile.name}
            </Text>
          </View>
        </View>

        {/* Points */}
        <TouchableOpacity
          style={{
            backgroundColor: COLORS.primary,
            height: 40,
            paddingLeft: 3,
            paddingRight: SIZES.radius,
            borderRadius: 20,
          }}
          onPress={() => {
            console.log('points pressed');
          }}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                width: 30,
                height: 30,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 25,
                backgroundColor: 'rgba(0,0,0,0.5)',
              }}>
              <Image
                source={icons.plus_icon}
                resizeMode="contain"
                style={{ width: 20, height: 20 }}
              />
            </View>
            <Text
              style={{
                marginLeft: SIZES.base,
                color: COLORS.white,
                ...FONTS.body3,
              }}>
              {profile.points} points
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }

  function renderButtonSection() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          padding: SIZES.padding,
        }}>
        <View
          style={{
            flexDirection: 'row',
            height: 70,
            backgroundColor: COLORS.secondary,
            borderRadius: SIZES.radius,
          }}>
          {/* Claim */}
          <TouchableOpacity
            style={{ flex: 1 }}
            onPress={() => console.log(' claim pressed')}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={icons.claim_icon}
                resizeMode="contain"
                style={{ width: 30, height: 30 }}
              />
              <Text
                style={{
                  marginLeft: SIZES.base,
                  ...FONTS.body3,
                  color: COLORS.white,
                }}>
                Claim
              </Text>
            </View>
          </TouchableOpacity>

          {/* Divider */}
          <LineDivider />

          {/* Get Points */}
          <TouchableOpacity
            style={{ flex: 1 }}
            onPress={() => console.log('get points pressed')}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={icons.point_icon}
                resizeMode="contain"
                style={{ width: 30, height: 30 }}
              />
              <Text
                style={{
                  marginLeft: SIZES.base,
                  ...FONTS.body3,
                  color: COLORS.white,
                }}>
                Get Points
              </Text>
            </View>
          </TouchableOpacity>

          {/* Divider */}
          <LineDivider />

          {/* My Card */}
          <TouchableOpacity
            style={{ flex: 1 }}
            onPress={() => console.log('my card pressed')}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={icons.card_icon}
                resizeMode="contain"
                style={{ width: 30, height: 30 }}
              />
              <Text
                style={{
                  marginLeft: SIZES.base,
                  ...FONTS.body3,
                  color: COLORS.white,
                }}>
                My Card
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <View style={{ height: 200, marginTop: SIZES.h1 }}>
      {renderHeader()}
      {renderButtonSection()}
    </View>
  );
};

export default Header;
