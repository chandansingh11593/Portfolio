import { createClient } from '@sanity/client';

export const client = createClient({
  apiVersion: '2021-10-21',
  projectId: 'zwjmyccn',
  dataset: 'production',
  token:
    'skVxXstkquhI3serCPfQt8uwEKbszbdPPY2wlGRN3jVVD03iXAUcKAmR3az3OewfEhKRz0smTaqrXGMyk3uj7KPRUTSbEkQpiffMKbejYCaohBE5Ng9zuLJTmqftBYHubq4WDUNalZlPbEEHTX7GlUbxqJoImPteWenQzRKQxGEoTEpJbp4K',
  useCdn: true,
});
