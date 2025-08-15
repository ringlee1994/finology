import React, { useEffect, useState, useMemo } from 'react';
import { SafeAreaView, View, StyleSheet, Alert, FlatList, ListRenderItem } from 'react-native';
import { Text, Button, Divider, Menu } from 'react-native-paper';

import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../../redux/getUserSlice';

import { styles } from '../../shared';
import { TEXT_STRING } from '../../constants';
import LoadingIndicator from '../../components/LoadingIndicator';
import ListItems, { User } from './components/ListItems';
import SearchBar from '../../components/SearchBar';
import EmptyList from './components/EmptyItems';
import CityMenu from './components/CityMenu';
import CompanyMenu from './components/CompanyMenu';


const Main = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedCompany, setSelectedCompany] = useState('');
  const [cityMenuVisible, setCityMenuVisible] = useState(false);
  const [companyMenuVisible, setCompanyMenuVisible] = useState(false);

  const dispatch = useDispatch();
  const userData = useSelector((state: any) => state.getUser.dataSource) as User[];
  const loading = useSelector((state: any) => state.getUser.loading);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        await dispatch(fetchUser()).unwrap();
        // console.log('success');
      } catch (error: any) {
        Alert.alert(TEXT_STRING.ERROR_MSG);
        // console.error('[error]', JSON.stringify(error));
      }
    };

    fetchUserData();
  }, [dispatch]);



  const onChangeSearch = (query: string) => setSearchQuery(query);

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCity('');
    setSelectedCompany('');
  };

  const cities = useMemo(() => {
    const allCities = userData.map(user => user.address?.city).filter(Boolean);
    const uniqueCities = allCities.filter((city, index) => allCities.indexOf(city) === index);
    return uniqueCities;
  }, [userData]);

  const companies = useMemo(() => {
    const allCompanies = userData.map(user => user.company?.name).filter(Boolean);
    const uniqueCompanies = allCompanies.filter((company, index) => allCompanies.indexOf(company) === index);
    return uniqueCompanies;
  }, [userData]);

  const filteredData = useMemo(() => {
    return userData.filter(user => {
      const matchName = user.username.toLowerCase().includes(searchQuery.toLowerCase());
      const matchCity = selectedCity ? user.address?.city === selectedCity : true;
      const matchCompany = selectedCompany ? user.company?.name === selectedCompany : true;
      return matchName && matchCity && matchCompany;
    });
  }, [userData, searchQuery, selectedCity, selectedCompany]);




  const renderHeader = useMemo(() => {
    const isFilterApplied = !!searchQuery || !!selectedCity || !!selectedCompany;
    return (
      <View style={styles.marginTop.mt60}>
        <Text variant={'displaySmall'} style={styles.textAlign.center}>
          {TEXT_STRING.USERS}
        </Text>
        <SearchBar
          placeholder={TEXT_STRING.SEARCH}
          value={searchQuery}
          onChange={onChangeSearch} />

        <View style={localStyles.filterStyle}>
          <CityMenu
            options={cities}
            selected={selectedCity}
            setSelected={setSelectedCity}
            visible={cityMenuVisible}
            setVisible={setCityMenuVisible}
          />
          <CompanyMenu
            options={companies}
            selected={selectedCompany}
            setSelected={setSelectedCompany}
            visible={companyMenuVisible}
            setVisible={setCompanyMenuVisible}
          />
        </View>

        {isFilterApplied && (
          <Button onPress={clearFilters} style={styles.marginTop.mt10}>
            {TEXT_STRING.CLEAR_FILTERS}
          </Button>
        )}

        <Divider style={styles.marginVertical.mv10} />
      </View>
    )
  })

  const renderItem: ListRenderItem<User> = ({ item }) => <ListItems user={item} />;




  if (loading) {
    return <LoadingIndicator />;
  }

  return (
    <SafeAreaView style={localStyles.backgroundStyle}>
      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={{ padding: 10 }}
        ListHeaderComponent={renderHeader}
        ListEmptyComponent={!loading && <EmptyList />}
      />
    </SafeAreaView>
  );
};

const localStyles = StyleSheet.create({
  backgroundStyle: [
    styles.backgroundObject.white,
    styles.flex,
  ],
  filterStyle: [
    styles.flexDirection.row,
    styles.justifyContent.spaceevenly
  ],
});

export default Main;
