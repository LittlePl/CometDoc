<template>
    <component :is="link ? 'a' : 'div'" :href="link" :target="link ? '_self' : undefined" class="resource-meta-compact" :class="{ 'has-link': !!link }">
        <div class="meta-section main-info">
            <div class="header-flex">
                <div class="plugin-icon-box">
                    <img v-if="icon" :src="icon" :alt="name" />
                    <span v-else class="icon-fallback">{{ name.charAt(0).toUpperCase() }}</span>
                </div>

                <div class="title-content">
                    <div class="name-row">
                        <h2 class="plugin-name">{{ name }}</h2>
                        <span class="v-tag" v-if="tip">
                            <svg viewBox="0 0 24 24" class="svg-icon">
                                <path fill="currentColor"
                                    d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.41l9 9c.36.36.86.58 1.41.58s1.05-.22 1.41-.59l7-7c.38-.38.59-.88.59-1.41s-.21-1.04-.59-1.41zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z" />
                            </svg>
                            {{ tip }}
                        </span>
                        <span class="author-tag" v-if="author">
                            <svg viewBox="0 0 24 24" class="svg-icon">
                                <path fill="currentColor"
                                    d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                            </svg>
                            {{ author }}
                        </span>
                    </div>

                    <div class="stats-row" v-if="createdAt || size">
                        <span class="stat-item" title="发布时间" v-if="createdAt">
                            <svg viewBox="0 0 24 24" class="svg-icon">
                                <path fill="currentColor"
                                    d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM9 14H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm-8 4H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2z" />
                            </svg>
                            {{ formatDate(createdAt) }}
                        </span>
                        <span class="stat-item" title="文件大小" v-if="size">
                            <svg viewBox="0 0 24 24" class="svg-icon">
                                <path fill="currentColor"
                                    d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                            </svg>
                            {{ size }} MB
                        </span>
                    </div>

                    <p class="plugin-desc">{{ desc || '暂无详细描述...' }}</p>
                </div>
            </div>
        </div>
    </component>
</template>

<script setup>
import { useData } from 'vitepress';

defineProps({
    name: {
        type: String,
        required: true
    },
    tip: {
        type: String,
        default: ''
    },
    author: {
        type: String,
        default: ''
    },
    createdAt: {
        type: String,
        default: ''
    },
    size: {
        type: [String, Number],
        default: ''
    },
    desc: {
        type: String,
        default: ''
    },
    icon: {
        type: String,
        default: ''
    },
    link: {
        type: String,
        default: ''
    }
});

const formatDate = (dateStr) => {
    if (!dateStr) return '';
    const d = new Date(dateStr);
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
};
</script>

<style scoped>
.resource-meta-compact {
    margin: 24px 0;
    border: 1px solid var(--vp-c-divider);
    border-radius: 12px;
    overflow: hidden;
    background-color: var(--vp-c-bg-alt);
    transition: border-color 0.3s;
    cursor: default;
    text-decoration: none;
    color: inherit;
    display: block;
}

.resource-meta-compact.has-link:hover {
    border-color: var(--vp-c-brand);
    cursor: pointer;
}

.resource-meta-compact.has-link {
    cursor: pointer;
}

.main-info {
    padding: 20px;
    background-color: var(--vp-c-bg-soft);
}

.header-flex {
    display: flex;
    gap: 20px;
    align-items: flex-start;
}

.plugin-icon-box {
    width: 64px;
    height: 64px;
    flex-shrink: 0;
    border-radius: 14px;
    background: var(--vp-c-bg-alt);
    border: 1px solid var(--vp-c-divider);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.plugin-icon-box img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.icon-fallback {
    font-size: 28px;
    font-weight: bold;
    color: var(--vp-c-brand);
    font-family: var(--vp-font-family-mono);
}

.title-content {
    flex: 1;
}

.name-row {
    display: flex;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
}

.plugin-name {
    margin: 0 !important;
    border: none !important;
    padding: 0 !important;
    font-size: 22px !important;
    color: var(--vp-c-text-1);
    font-weight: 700;
}

.svg-icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
}

.v-tag,
.author-tag {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    font-size: 12px;
}

.v-tag {
    font-family: var(--vp-font-family-mono);
    background: rgba(59, 130, 246, 0.1);
    color: var(--vp-c-brand);
    padding: 2px 6px;
    border-radius: 6px;
    font-weight: 600;
}

:global(.dark) .v-tag {
    background-color: rgba(59, 130, 246, 0.2);
}

.author-tag {
    color: var(--vp-c-text-2);
    font-weight: 500;
}

.stats-row {
    display: flex;
    gap: 16px;
    margin-top: 8px;
    color: var(--vp-c-text-3);
    font-size: 13px;
    font-family: var(--vp-font-family-mono);
}

.stat-item {
    display: inline-flex;
    align-items: center;
    gap: 4px;
}

.plugin-desc {
    margin: 12px 0 0 0 !important;
    font-size: 14px;
    line-height: 1.6;
    color: var(--vp-c-text-2);
}
</style>