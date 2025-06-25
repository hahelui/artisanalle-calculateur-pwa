<script setup>
import { ref, onMounted } from 'vue';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { addPerson, getPeople } from '@/lib/db';

const name = ref('');
const age = ref('');
const people = ref([]);

const loadPeople = async () => {
  people.value = await getPeople();
};

const handleSubmit = async (e) => {
  e.preventDefault();
  if (!name.value || !age.value) return;
  
  await addPerson({
    name: name.value,
    age: parseInt(age.value, 10)
  });
  
  name.value = '';
  age.value = '';
  await loadPeople();
};

onMounted(() => {
  loadPeople();  
});
</script>

<template>
  <div class="container mx-auto p-4 max-w-2xl">
    <h1 class="text-2xl font-bold mb-6">People Manager</h1>
    
    <Tabs default-value="add" class="w-full">
      <TabsList class="grid w-full grid-cols-2">
        <TabsTrigger value="add">Add Person</TabsTrigger>
        <TabsTrigger value="view">View All</TabsTrigger>
      </TabsList>
      
      <TabsContent value="add" class="mt-4">
        <form @submit="handleSubmit" class="space-y-4">
          <div>
            <label class="block text-sm font-medium mb-1">Name</label>
            <Input v-model="name" placeholder="Enter name" />
          </div>
          <div>
            <label class="block text-sm font-medium mb-1">Age</label>
            <Input v-model="age" type="number" placeholder="Enter age" />
          </div>
          <Button type="submit" class="w-full">Add Person</Button>
        </form>
      </TabsContent>
      
      <TabsContent value="view" class="mt-4">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Age</TableHead>
              <TableHead>Added On</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow v-for="person in people" :key="person.id">
              <TableCell>{{ person.name }}</TableCell>
              <TableCell>{{ person.age }}</TableCell>
              <TableCell>{{ new Date(person.createdAt).toLocaleString() }}</TableCell>
            </TableRow>
            <TableRow v-if="!people.length">
              <TableCell colspan="3" class="text-center py-4">No people added yet</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TabsContent>
    </Tabs>
  </div>
</template>
