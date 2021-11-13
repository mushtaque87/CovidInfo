import React from "react";
import {Colors} from "react-native/Libraries/NewAppScreen";
import {Button, ScrollView, Text, View} from 'react-native';
import styles from './styles'
import { NavigationInjectedProps, withNavigation } from "react-navigation";
import Route from "../../utils/route";
import {flowRight as compose} from 'lodash';
import {useQuery, useQueryClient} from "react-query";
import axios from "axios";

const Dashboard: React.FC = (navigationprops: NavigationInjectedProps) => {
    const [postId, setPostId] = React.useState(-1);

    const moveToDetailPage = () => {
        console.log('navigationprops',navigationprops);
        const {navigation} = navigationprops;
        console.log('navigation',navigation);
        navigation.navigate(Route.DetailPage)
    }

    function usePosts() {
        return useQuery("countries", async () => {
            const { data } = await axios.get(
                "https://api.covid19api.com/countries"
            );
            console.log('countries',data);
            return data;
        });
    }

    // function usePost(postId) {
    //     return useQuery(["post", postId], () => getPostById(postId), {
    //         enabled: !!postId,
    //     });
    // }


    function Posts({ setPostId }) {
        console.log('Posts')
        const queryClient = useQueryClient();
        const {status, data, error, isFetching} = usePosts();
        console.log('Posts data',data)
         return (
             <>
             {data?.length > 0 && data.map((country) => (
            //         // queryClient.getQueryData(["post", post.id])
            // <Text>
            //     Dashboard
            // </Text>
            //     ))}
        //setPostId(1)
      // return(

                    <Text>
                        {country.Country}
                    </Text>
                 ))}
                 </>
        );
    }
    return (
        <View style={styles.sectionContainer}>
            <Text>
             Dashboard
             </Text>
            <ScrollView>
            {/*{postId > -1 ? (*/}
            <Posts setPostId={setPostId} />
            {/*):null}*/}
            <Button
                onPress={moveToDetailPage}
                title="See More"
                color="#841584"
                accessibilityLabel="Learn more about other countries clicking this button"
            />
            </ScrollView>
        </View>
    )
}
export default compose(withNavigation)(Dashboard);
