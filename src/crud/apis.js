// apis.js
import supabase from '../client.js'; // Ensure you have a supabase client setup

const fetchCreators = async () => {
    try {
        const { data, error } = await supabase
            .from("creators")
            .select();

        if (error) throw error;
        return data;
    } catch (error) {
        console.error("Error fetching data from Supabase:", error);
        return null;
    }
};

const addCreator = async (creator) => {
    try {
        const { data, error } = await supabase
            .from("creators")
            .insert(creator)
            .select();

        if (error) throw error;
        return data;
    } catch (error) {
        console.error("Error adding data to Supabase:", error);
        return null;
    }
};


// const { data, error } = await supabase
//   .from('creators')
//   .update({ other_column: 'otherValue' })
//   .eq('some_column', 'someValue')
//   .select()
          

const updateCreator = async (id, updates) => {
    try {
        const { data, error } = await supabase
            .from("creators")
            .update(updates)
            .match({ id });

        if (error) throw error;
        return data;
    } catch (error) {
        console.error("Error updating data in Supabase:", error);
        return null;
    }
};

const deleteCreator = async (id) => {
    try {
        const { data, error } = await supabase
            .from("creators")
            .delete()
            .match({ id });

        if (error) throw error;
        return data;
    } catch (error) {
        console.error("Error deleting data from Supabase:", error);
        return null;
    }
};

export { fetchCreators, addCreator, updateCreator, deleteCreator };
