export default {
  fetch(request, env, ctx) {
    return new Response("Static site active!", { status: 200 });
  }
}
