import { ref, computed, watch } from 'vue';
export default function useSearch(items, filter) {
  const enteredSearchTerm = ref('');
  const activeSearchTerm = ref('');

  const availableItems= computed(function() {
    let users = [];
    if (activeSearchTerm.value) {
      users = items.filter(item =>
        item[filter].includes(activeSearchTerm.value)
      );
    } else if (items) {
      users = items;
    }
    return users;
  });

  watch(enteredSearchTerm, function(newValue) {
    setTimeout(() => {
      if (newValue === enteredSearchTerm.value) {
        activeSearchTerm.value = newValue;
      }
    }, 300);
  });

  function updateSearch(val) {
    enteredSearchTerm.value = val;
  }

  return{
    availableItems,
    enteredSearchTerm,
    updateSearch
  };
}
