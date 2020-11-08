import React from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
  SafeAreaView,
} from 'react-native';
import Header from '../components/Header';
import { COLORS, FONTS, icons, images, SIZES } from '../constants';

const Home = () => {
  const profileData = {
    name: 'Enrique',
    points: 200,
  };

  // fake book data
  const bookDaemon = {
    id: 1,
    bookName: 'Daemon',
    bookCover: images.daemon,
    rating: 4.0,
    language: 'Eng',
    pageNo: 632,
    author: 'Daniel Suarez',
    genre: ['Science Fiction', 'Fiction', 'Thriller', 'Cyberpunk'],
    description: `A high-tech thriller for the wireless age that explores the unthinkable 
    consequences of a computer program running without human control—a daemon—designed to
    dismantle society and bring about a new world order. Technology controls almost everything
    in our modern-day world, from remote entry on our cars to access to our homes, from the 
    flight controls of our airplanes to the movements of the entire world economy. Thousands 
    of autonomous computer programs, or daemons, make our networked world possible, running 
    constantly in the background of our lives, trafficking e-mail, transferring money, and 
    monitoring power grids. For the most part, daemons are benign, but the same can't always 
    be said for the people who design them. Matthew Sobol was a legendary computer game 
    designer—the architect behind half-a-dozen popular online games. His premature death depressed 
    both gamers and his company's stock price. But Sobol's fans aren't the only ones to note his 
    passing. When his obituary is posted online, a previously dormant daemon activates, initiating 
    a chain of events intended to unravel the fabric of our hyper-efficient, interconnected world. 
    With Sobol's secrets buried along with him, and as new layers of his daemon are unleashed at 
    every turn, it's up to an unlikely alliance to decipher his intricate plans and wrest the world 
    from the grasp of a nameless, faceless enemy—or learn to live in a society in which we are no 
    longer in control. Computer technology expert Daniel Suarez blends haunting high-tech realism 
    with gripping suspense in an authentic, complex thriller in the tradition of Michael Crichton, 
    Neal Stephenson, and William Gibson.`,
    backgroundColor: 'rgba(240, 240, 232, 0.9)',
    navTintColor: '#000',
  };

  const bookTheBigNine = {
    id: 2,
    bookName: `The Big Nine: How the Tech Titans and Their Thinking Machines Could Warp Humanity`,
    bookCover: images.theBigNine,
    rating: 3.83,
    language: 'Eng',
    pageNo: 336,
    author: 'Amy Webb',
    genre: ['Nonfiction', 'Technology', 'Business', 'Artificial Intelligence'],
    description: `A call-to-arms about the broken nature of artificial intelligence, and the powerful 
    corporations that are turning the human-machine relationship on its head. We like to think that we 
    are in control of the future of "artificial" intelligence. The reality, though, is that we -- the 
    everyday people whose data powers AI -- aren't actually in control of anything. When, for example, 
    we speak with Alexa, we contribute that data to a system we can't see and have no input into -- one 
    largely free from regulation or oversight. The big nine corporations -- Amazon, Google, Facebook, 
    Tencent, Baidu, Alibaba, Microsoft, IBM and Apple--are the new gods of AI and are short-changing our 
    futures to reap immediate financial gain. In this book, Amy Webb reveals the pervasive, invisible ways 
    in which the foundations of AI -- the people working on the system, their motivations, the technology 
    itself -- is broken. Within our lifetimes, AI will, by design, begin to behave unpredictably, thinking 
    and acting in ways which defy human logic. The big nine corporations may be inadvertently building and 
    enabling vast arrays of intelligent systems that don't share our motivations, desires, or hopes for the 
    future of humanity. Much more than a passionate, human-centered call-to-arms, this book delivers a 
    strategy for changing course, and provides a path for liberating us from algorithmic decision-makers and 
    powerful corporations.`,
    backgroundColor: 'rgba(240, 240, 232, 0.9)',
    navTintColor: '#000',
  };

  const myBooksData = [
    {
      ...bookDaemon,
      completion: '100%',
      myRating: 5,
    },
    {
      ...bookTheBigNine,
      completion: '100%',
      myRating: 4,
    },
  ];

  const categoriesData = [
    {
      id: 1,
      categoryName: 'Best Seller',
      books: [bookTheBigNine, bookDaemon],
    },
    {
      id: 2,
      categoryName: 'The Latest',
      books: [bookTheBigNine],
    },
  ];

  const [profile, setProfile] = React.useState(profileData);
  const [myBooks, setMyBooks] = React.useState(myBooksData);
  const [categories, setCategories] = React.useState(categoriesData);
  const [selectedCategory, setSelectedCategory] = React.useState(1);

  function renderMyBookSection(myBooks) {
    const renderItem = ({ item, index }) => {
      return (
        <TouchableOpacity
          style={{
            flex: 1,
            marginLeft: index === 0 ? SIZES.padding : 0,
            marginRight: SIZES.radius,
          }}
          onPress={() => console.log('my book')}>
          {/* Book Cover */}
          <Image
            source={item.bookCover}
            resizeMode="cover"
            style={{ width: 180, height: 250, borderRadius: 20 }}
          />
          {/* Book Info */}
          <View
            style={{
              marginTop: SIZES.radius,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            {/* My Rating */}
            <Image
              source={icons.clock_icon}
              style={{ width: 20, height: 20, tintColor: COLORS.lightGray }}
            />
            <Text
              style={{
                marginLeft: 5,
                ...FONTS.body3,
                color: COLORS.lightGray,
              }}>
              {item.myRating}
            </Text>
            {/* Pages */}
            <Image
              source={icons.page_icon}
              style={{ width: 20, height: 20, tintColor: COLORS.lightGray }}
            />
            <Text
              style={{
                marginLeft: 5,
                ...FONTS.body3,
                color: COLORS.lightGray,
              }}>
              {item.pageNo}
            </Text>
          </View>
        </TouchableOpacity>
      );
    };

    return (
      <View style={{ flex: 1 }}>
        {/* Header */}
        <View
          style={{
            paddingHorizontal: SIZES.padding,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={{ ...FONTS.h2, color: COLORS.white }}> My Books</Text>

          <TouchableOpacity onPress={() => console.log('my books pressed')}>
            <Text
              style={{
                ...FONTS.body3,
                color: COLORS.lightGray,
                alignSelf: 'flex-start',
                textDecorationLine: 'underline',
              }}>
              see more
            </Text>
          </TouchableOpacity>
        </View>

        {/* Books */}
        <View style={{ flex: 1, marginTop: SIZES.padding }}>
          <FlatList
            data={myBooks}
            renderItem={renderItem}
            keyExtractor={(item) => `${item.id}`}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    );
  }

  function renderCategoryHeader() {
    const renderItem = ({ item }) => {
      return (
        <TouchableOpacity
          onPress={() => setSelectedCategory(item.id)}
          style={{ flex: 1, marginRight: SIZES.padding }}>
          {selectedCategory === item.id && (
            <Text style={{ ...FONTS.h2, color: COLORS.white }}>
              {item.categoryName}
            </Text>
          )}
          {selectedCategory !== item.id && (
            <Text style={{ ...FONTS.h2, color: COLORS.lightGray }}>
              {item.categoryName}
            </Text>
          )}
        </TouchableOpacity>
      );
    };
    return (
      <View style={{ flex: 1, paddingLeft: SIZES.padding }}>
        <FlatList
          data={categories}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => `${item.id}`}
          renderItem={renderItem}
        />
      </View>
    );
  }

  function renderCategoryData() {
    let books = [];

    let selectedCategoryBooks = categories.filter(
      (a) => a.id == selectedCategory,
    );

    if (selectedCategoryBooks.length > 0) {
      books = selectedCategoryBooks[0].books;
    }

    const renderItem = ({ item }) => {
      return (
        <View style={{ marginVertical: SIZES.base }}>
          <TouchableOpacity
            style={{ flex: 1, flexDirection: 'row' }}
            onPress={() => console.log('categoriees data')}>
            {/* Book Cover */}
            <Image
              source={item.bookCover}
              resizeMode="cover"
              style={{ width: 100, height: 150, borderRadius: 10 }}
            />

            <View
              style={{
                flex: 1,
                marginLeft: SIZES.radius,
                marginRight: SIZES.radius,
              }}>
              {/* Book Name and Author */}
              <View>
                <Text
                  style={{
                    paddingRight: SIZES.padding,
                    ...FONTS.h3,
                    color: COLORS.white,
                  }}>
                  {item.bookName}
                </Text>
                <Text style={{ ...FONTS.h4, color: COLORS.lightGray }}>
                  {item.author}
                </Text>
              </View>

              {/* Book Info */}

              {/* Genre */}
            </View>
          </TouchableOpacity>

          {/* Bookmark Button */}
          <TouchableOpacity
            onPress={() => console.log('bookmark')}
            style={{ position: 'absolute', top: 5, right: 15 }}>
            <Image
              source={icons.bookmark_icon}
              resizeMode="cover"
              style={{ width: 25, height: 25, tintColor: COLORS.lightGray }}
            />
          </TouchableOpacity>
        </View>
      );
    };

    return (
      <View
        style={{
          flex: 1,
          marginTop: SIZES.radius,
          paddingLeft: SIZES.padding,
        }}>
        <FlatList
          data={books}
          renderItem={renderItem}
          keyExtractor={(item) => `${item.id}`}
          showsVerticalScrollIndicator={false}
        />
      </View>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.black }}>
      <Header profile={profile} />

      {/* Body */}
      <ScrollView style={{ marginTop: SIZES.radius }}>
        {/* Book Section */}
        <View>{renderMyBookSection(myBooks)}</View>
        {/* Categories Section */}
        <View style={{ marginTop: SIZES.padding }}>
          <View>{renderCategoryHeader()}</View>
          <View>{renderCategoryData()}</View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
