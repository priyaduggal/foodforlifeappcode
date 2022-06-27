export const raf = (h) => {
    if (typeof __zone_symbol__requestAnimationFrame === 'function') {
        return __zone_symbol__requestAnimationFrame(h);
    }
    if (typeof requestAnimationFrame === 'function') {
        return requestAnimationFrame(h);
    }
    return setTimeout(h);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bpb25pYy9hbmd1bGFyLyIsInNvdXJjZXMiOlsidXRpbC91dGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBLE1BQU0sQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLENBQU0sRUFBRSxFQUFFO0lBQzVCLElBQUksT0FBTyxvQ0FBb0MsS0FBSyxVQUFVLEVBQUU7UUFDOUQsT0FBTyxvQ0FBb0MsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUNoRDtJQUNELElBQUksT0FBTyxxQkFBcUIsS0FBSyxVQUFVLEVBQUU7UUFDL0MsT0FBTyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUNqQztJQUNELE9BQU8sVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3ZCLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuZGVjbGFyZSBjb25zdCBfX3pvbmVfc3ltYm9sX19yZXF1ZXN0QW5pbWF0aW9uRnJhbWU6IGFueTtcbmRlY2xhcmUgY29uc3QgcmVxdWVzdEFuaW1hdGlvbkZyYW1lOiBhbnk7XG5cbmV4cG9ydCBjb25zdCByYWYgPSAoaDogYW55KSA9PiB7XG4gIGlmICh0eXBlb2YgX196b25lX3N5bWJvbF9fcmVxdWVzdEFuaW1hdGlvbkZyYW1lID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIF9fem9uZV9zeW1ib2xfX3JlcXVlc3RBbmltYXRpb25GcmFtZShoKTtcbiAgfVxuICBpZiAodHlwZW9mIHJlcXVlc3RBbmltYXRpb25GcmFtZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoaCk7XG4gIH1cbiAgcmV0dXJuIHNldFRpbWVvdXQoaCk7XG59O1xuIl19