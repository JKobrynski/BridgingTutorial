#import "BatteryEventsModule.h"

#import "BatteryEventsPackage-Swift.h"

#if RCT_NEW_ARCH_ENABLED

#import "BatteryEventsPackage.h"

@interface BatteryEventsModule () <NativeBatteryEventsModuleSpec>
@end
#endif

@interface BatteryEventsModule () <BatteryEventsModuleDelegate>
@end

@implementation BatteryEventsModule {
    BatteryEventsModuleImpl *moduleImpl;
    BOOL hasListeners;
}

RCT_EXPORT_MODULE(ScreenOrientationModule)

- (instancetype)init {
    self = [super init];
    if (self) {
        moduleImpl = [BatteryEventsModuleImpl new];
        moduleImpl.delegate = self;
    }
    return self;
}

+ (BOOL)requiresMainQueueSetup
{
    return NO;
}

- (NSArray<NSString *> *)supportedEvents
{
    return [BatteryEventsModuleImpl supportedEvents];
}

- (void)startObserving
{
    hasListeners = YES;
}

- (void)stopObserving
{
    hasListeners = NO;
}

- (void)sendEventWithName:(NSString * _Nonnull)eventName
                  payload:(float)payload
{
    if (hasListeners) {
        NSNumber *numberValue = [NSNumber numberWithFloat:payload];
        [self sendEventWithName:eventName body:numberValue];
    }
}

#if RCT_NEW_ARCH_ENABLED
- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:
    (const facebook::react::ObjCTurboModule::InitParams &)params
{
    return std::make_shared<facebook::react::NativeBatteryEventsModuleSpecJSI>(params);
}
#endif

@end

