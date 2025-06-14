<template>
    <ul className="timeline timeline-vertical lg:timeline-horizontal">
    
        <!-- Create list items based on reference above from props containing work experience -->

        <li v-for="(item, index) in experience" :key="index">
            <div class="timeline-start">{{ item.duration }}</div>
            <div class="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd"/>
                </svg>
            </div>
            <div class="timeline-end timeline-box">
                <strong>{{ item.company }}</strong> - {{ item.position }}
                <p>{{ item.description }}</p>
                <a v-if="item.link" :href="item.link" target="_blank">{{ item.linkText || 'Learn more' }}</a>
                <p v-if="item.reference">{{ item.reference }}: {{ item.referenceInfo }}</p>
            </div>
            <hr />        
        </li>
    </ul>
</template>

<script setup lang="ts">
interface WorkExperience {
  company: string;
  position: string;
  duration: string;
  description: string;
  icon: any;
  link?: string;
  linkText?: string;
  reference?: string;
  referenceInfo?: string;
}

const props = defineProps<{
  experience: WorkExperience[];
}>();

// Directly use props.experience, no need for additional ref
const { experience } = props;
</script>

<style scoped>

</style>